import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';

export function mountStayMap(root: HTMLElement, cards: HTMLElement[]) {
  const section = root.querySelector<HTMLElement>('[data-stay-map]')!;
  const canvas = section.querySelector<HTMLElement>('[data-canvas]')!;
  const panel = section.querySelector<HTMLElement>('[data-selected]')!;
  const content = panel.querySelector<HTMLElement>('[data-content]')!;
  const overview = section.querySelector<HTMLButtonElement>('[data-fit]')!;
  const counter = section.querySelector<HTMLElement>('[data-count-label]')!;
  const error = section.querySelector<HTMLElement>('[data-tile-error]')!;
  section.hidden = false;
  const map = L.map(canvas, {scrollWheelZoom:false, zoomControl:false, minZoom:5, maxZoom:19}).setView([36.726,27.647],11);
  L.control.zoom({zoomInTitle:section.dataset.plus,zoomOutTitle:section.dataset.minus}).addTo(map);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).on('tileerror',()=>{error.hidden=false;}).on('tileload',()=>{error.hidden=true;}).addTo(map);
  const group = L.markerClusterGroup({
    animate:false, maxClusterRadius:40, showCoverageOnHover:false,
    iconCreateFunction(cluster) {
      const count = String(cluster.getChildCount());
      const span = document.createElement('span');
      span.textContent=count; span.setAttribute('aria-label',section.dataset.cluster!.replace('{n}',count));
      return L.divIcon({className:'stay-cluster', html:span, iconSize:[38,38]});
    },
  }).addTo(map);
  const pin = (picked=false) => L.divIcon({className:'stay-pin'+(picked?' is-picked':''),iconSize:[30,30],html:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 18V5m18 13v-7H7a3 3 0 0 0-4 3v2h18M7 8h3"/></svg>'});
  const pins = new Map<HTMLElement,L.Marker>();
  let picked: HTMLElement | undefined;
  let focusBack: HTMLElement | undefined;
  let visible: L.Marker[] = [];
  function close() {
    if(picked) pins.get(picked)?.setIcon(pin()).setZIndexOffset(0);
    picked=undefined; panel.hidden=true; content.replaceChildren(); map.invalidateSize({pan:false});
  }
  function fit() {
    if(visible.length) map.fitBounds(L.latLngBounds(visible.map(p=>p.getLatLng())),{padding:[25,25],maxZoom:16,animate:false});
    else map.setView([36.726,27.647],11,{animate:false});
  }
  function select(card: HTMLElement, trigger?: HTMLElement) {
    close();
    picked=card;focusBack=trigger;
    const marker=pins.get(card);
    const picture=card.querySelector<HTMLImageElement>('.stay-picture:not([hidden]) img');
    const heading=document.createElement('h4');heading.id='stay-selection';heading.tabIndex=-1;
    heading.textContent=card.querySelector('h3')!.textContent;
    if(picture) {const img=picture.cloneNode(true) as HTMLImageElement;img.loading='eager';content.append(img);}
    content.append(heading);
    for(const selector of ['address','[data-door-note]','a.phone']) {
      const entry=card.querySelector(selector);if(entry) content.append(entry.cloneNode(true));
    }
    const link=card.querySelector<HTMLAnchorElement>('[data-map-link]')!.cloneNode(true) as HTMLAnchorElement;
    link.removeAttribute('data-select-stay');link.removeAttribute('data-map-link');
    if(marker) link.textContent=section.dataset.directions!;
    content.append(link);
    const source=card.querySelector('a[data-location-source]');if(source) content.append(source.cloneNode(true));
    panel.querySelector<HTMLElement>('[data-unmapped]')!.hidden=!!marker;
    panel.hidden=false;map.invalidateSize({pan:false});
    if(marker) {
      marker.setIcon(pin(true)).setZIndexOffset(1000);
      if(trigger?.closest('[data-stay]')) {
        map.setView(marker.getLatLng(),Math.max(17,map.getZoom()),{animate:false});
        group.zoomToShowLayer(marker,()=>{});
      } else if (!map.getBounds().pad(-0.12).contains(marker.getLatLng())) map.panTo(marker.getLatLng(),{animate:false});
    } else fit();
    heading.focus({preventScroll:true});
    if (matchMedia('(max-width:650px)').matches) panel.scrollIntoView({block:'nearest'});
    else if(trigger?.closest('[data-stay]')) section.scrollIntoView({block:'nearest'});
  }
  for(const card of cards) {
    if(!card.dataset.lat || !card.dataset.lon) continue;
    const title=card.querySelector('h3')!.textContent!;
    const marker=L.marker([Number(card.dataset.lat),Number(card.dataset.lon)],{icon:pin(),title,alt:title});
    marker.on('click',()=>select(card,marker.getElement()));
    pins.set(card,marker);
  }
  root.addEventListener('click',event=>{
    if(event.defaultPrevented || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || !(event.target instanceof Element)) return;
    const card=event.target.closest<HTMLElement>('[data-stay]');
    if(!card || event.target.closest('a,button') && !event.target.closest('[data-select-stay]') || window.getSelection()?.toString()) return;
    event.preventDefault();select(card,event.target.closest<HTMLElement>('[data-select-stay]') || card.querySelector<HTMLElement>('h3 a')!);
  });
  function dismiss() {close();fit();(focusBack?.isConnected ? focusBack : overview).focus({preventScroll:true});}
  section.querySelector('[data-dismiss]')!.addEventListener('click',dismiss);
  section.addEventListener('keydown',event=>{if(event.key==='Escape' && !panel.hidden){event.preventDefault();dismiss();}});
  overview.addEventListener('click',()=>{close();fit();});
  return (matches:HTMLElement[])=>{
    close();group.clearLayers();visible=matches.flatMap(card=>pins.get(card) || []);group.addLayers(visible);
    counter.textContent=section.dataset.count!.replace('{shown}',String(visible.length)).replace('{total}',String(matches.length));
    fit();
  };
}
