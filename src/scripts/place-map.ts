import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';

export function showPlaceMap(root: HTMLElement) {
  const panel = root.querySelector<HTMLElement>('[data-map-panel]')!;
  const canvas = panel.querySelector<HTMLElement>('[data-location-map]')!;
  const cards = root.querySelectorAll<HTMLElement>('[data-place]');
  const bounds = L.latLngBounds([]);
  panel.hidden = false;
  const map = L.map(canvas, { scrollWheelZoom: false, zoomControl: false });
  L.control.zoom({ zoomInTitle: canvas.dataset.zoomIn, zoomOutTitle: canvas.dataset.zoomOut }).addTo(map);
  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  });
  const error = panel.querySelector<HTMLElement>('[data-map-error]')!;
  tiles.on('tileerror', () => { error.hidden = false; });
  tiles.on('tileload', () => { error.hidden = true; });
  tiles.addTo(map);
  const markers = L.markerClusterGroup({
    maxClusterRadius: 36, disableClusteringAtZoom: 17, animate: false, showCoverageOnHover: false,
    iconCreateFunction(cluster) {
      const label = document.createElement('span');
      label.textContent = String(cluster.getChildCount());
      label.setAttribute('aria-label', canvas.dataset.clusterLabel!.replace('{n}', label.textContent));
      return L.divIcon({ className: 'directory-cluster', html: label, iconSize: [36, 36] });
    },
  });
  const pharmacyPins: Array<() => void> = [];
  for (const card of cards) {
    const position = L.latLng(Number(card.dataset.lat), Number(card.dataset.lon));
    const title = card.querySelector('h3')!;
    const popup = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = title.textContent;
    popup.append(name, card.querySelector('address')!.textContent!,
      card.querySelector('.phone')!.cloneNode(true), card.querySelector('[data-directions]')!.cloneNode(true));
    const icon = L.divIcon({ className: 'directory-pin', html: card.dataset.number, iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] });
    const marker = L.marker(position, { title: name.textContent, icon }).bindPopup(popup);
    const markerLabel = () => [name.textContent, card.dataset.duty].filter(Boolean).join(' · ');
    marker.on('add', () => { marker.getElement()?.setAttribute('aria-label', markerLabel()); });
    markers.addLayer(marker);
    if (card.hasAttribute('data-pharmacy')) {
      const status = document.createElement('strong');
      name.after(status);
      let lastDuty = '';
      pharmacyPins.push(() => {
        const duty = card.dataset.duty || '';
        if (lastDuty === duty) return;
        lastDuty = duty;
        status.textContent = duty;
        status.hidden = !duty;
        if (duty) {
          markers.removeLayer(marker);
          marker.setIcon(L.divIcon({ className: 'directory-pin directory-duty-pin', html: 'E',
            iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -16] }));
          marker.setZIndexOffset(2000).addTo(map);
        } else {
          marker.removeFrom(map).setIcon(icon).setZIndexOffset(0);
          markers.addLayer(marker);
        }
        marker.getElement()?.setAttribute('aria-label', markerLabel());
      });
    }
    bounds.extend(position);
    card.querySelector('a[data-show-place]')!.addEventListener('click', event => {
      if (!(event instanceof MouseEvent) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      map.setView(position, 17, { animate: false });
      marker.openPopup();
      marker.getElement()?.focus({preventScroll: true});
      panel.scrollIntoView({ block: 'nearest' });
    });
  }
  function showAll() {
    map.closePopup();
    map.fitBounds(bounds, { padding: [25, 25], maxZoom: 16, animate: false });
  }
  showAll();
  markers.addTo(map);
  const updatePharmacyPins = () => pharmacyPins.forEach(update => update());
  updatePharmacyPins();
  root.addEventListener('pharmacy-duty-change', updatePharmacyPins);
  panel.querySelector('[data-map-reset]')!.addEventListener('click', showAll);
}
