import test from 'node:test';
import assert from 'node:assert/strict';
import {readSource, normalize, mergeRows, localDay} from './adapters.mjs';

const karia={id:'karia',adapter:'karia',url:'https://datcakariatiyatrozamani.com/'};
const venue={id:'venue',adapter:'venue',url:'https://biletinial.com/tr-tr/mekan/datca'};
const ld = data => '<script type="application/ld+json">' + JSON.stringify(data) + '</script>';
const show = { '@type':'TheaterEvent',name:'Deneme',startDate:'2026-12-10T20:30:00+03:00',location:{name:'Bülent Ecevit Kültür Merkezi',address:{addressLocality:'Datça'}}};
const base = {title:'Deneme',start:'2026-12-10',end:'2026-12-10',time:'20:30',venue:'Datça',category:'theatre',url:karia.url};
const checked = '2026-11-10';

test('only scheduled performances in the district are candidates',async () => {
  const info = {'@graph':[{'@type':'Organization',name:'Datça Karia Tiyatro'},show,{...show,eventStatus:'https://schema.org/EventCancelled'},{...show,location:{name:'Kartal Bülent Ecevit Kültür Merkezi',address:'İstanbul'}}]};
  const rows = await readSource(karia,async () => ld(info));
  assert.equal(rows.length,1);
  assert.equal(rows[0].time,'20:30');
});
test('venue index follows show details for local time and district',async () => {
  const performanceUrl = 'https://biletinial.com/tr-tr/tiyatro/ornek';
  const place = {'@type':'PerformingArtsTheater',name:'Datça Bülent Ecevit Kültür Merkezi',event:[{...show,url:performanceUrl,startDate:'2026-12-10T23:30:00+03:00'}]};
  const rows = await readSource(venue,async url => url === venue.url ? ld(place) : ld([show,{...show,location:{name:'Tiyatro',address:'Fethiye'}}]));
  assert.equal(rows.length,1);
  assert.equal(rows[0].time,'20:30');
});
test('city tournament lists exclude other districts and uncertain dates',async () => {
  const block = (when,name) => '<div><div>' + when + '</div><div>' + name + '</div></div>';
  const html = '<div id="tsf7-ilce-datca"></div>' + block('21–22 Kasım 2026 &nbsp; · Datça','ÖĞRETMENLER GÜNÜ') + block('21–22 Kasım 2026 · Bodrum','DİĞER') + block('Nisan 2027 · Gün kesinleşmedi · Datça','TARİH YOK');
  const rows = await readSource({adapter:'chess',url:'https://mugla.tsf.org.tr/calendar'},async () => html);
  assert.deepEqual(rows.map(x=>[x.start,x.end]),[['2026-11-21','2026-11-22']]);
});
test('course prose overrides inconsistent CMS hours and date range',async () => {
  const source = {adapter:'council',url:'https://datca.bel.tr/etkinlikler'};
  const index = '<h1>Etkinlikler</h1><a class="event-card-v2 " href="/etkinlikler/test">Etkinlik</a>';
  const detail = ld({...show,'@type':'Event',startDate:'2026-11-13T09:23:00+03:00',endDate:'2027-04-26T09:23:00+03:00'}) + '<div class="content-html">Kurs Süresi: 13 Kasım 2026 – 26 Mart 2027 Gün ve Saat: Her Cuma günü | 09:30 - 12:30</div>';
  const [row] = await readSource(source,async url => url === source.url ? index : detail);
  assert.deepEqual([row.start,row.end,row.schedule,row.time,row.closeTime],['2026-11-13','2027-03-26','friday','09:30','12:30']);
});
test('schema failure is different from a verified empty venue',async () => {
  await assert.rejects(readSource(venue,async () => '<html>Hold on</html>'));
  assert.deepEqual(await readSource(venue,async () => ld({'@type':'Place',name:'Datça Tiyatrosu'})),[]);
});
test('invalid day, time and outbound source hosts cannot enter snapshot',() => {
  for (const patch of [{start:'2027-02-30'},{time:'24:01'},{url:'https://example.org/'},{end:'2026-12-09'}]) {
    assert.throws(() => normalize({...base,...patch},karia,checked));
  }
});
test('retain ongoing events, remove expired events and keep distinct showtimes',() => {
  const a = normalize(base,karia,checked);
  const b = normalize({...base,time:'21:30'},karia,checked);
  const old = normalize({...base,start:'2026-11-01',end:'2026-11-01'},karia,checked);
  assert.equal(mergeRows([a,a,b,old],checked).length,2);
  assert.equal(localDay(new Date('2026-11-09T21:01:00Z')),checked);
});

test('Biletix rejects same-name venues in another city and stopped performances',async () => {
  const source = {adapter:'biletix',url:'https://www.biletix.com/mekan/48A02/TURKIYE/tr'};
  const place = {'@type':'Place',name:'Datça Bülent Ecevit Kültür Merkezi'};
  const item = {eventCode:'5BP99',performanceCode:'001',eventName:'Oyun',venueName:place.name,venueCity:'Muğla',performanceDate:Date.parse('2026-11-15T20:00:00+03:00'),status:'s01_onsale'};
  const data = {venueId:'48A02',performanceItems:[item,{...item,venueCity:'İstanbul'},{...item,status:'s04_canceled'}]};
  const state = {reply:{u:'https://www.biletix.com/wbtxapi/api/v1/bxcached/event/getAllEventsDetailByVenueCode/48A02/tr',b:{status:'SUCCESS',data}}};
  const rows = await readSource(source,async () => ld(place) + '<script id="ng-state" type="application/json">' + JSON.stringify(state) + '</script>');
  assert.deepEqual(rows.map(x => [x.time,x.url]),[['20:00','https://www.biletix.com/performance/5BP99/001/TURKIYE/tr']]);
});
test('Bubilet shared data only imports sessions matching the verified place and city',async () => {
  const source = {adapter:'bubilet',url:'https://www.bubilet.com.tr/mekan/bulent-ecevit-kultur-merkezi'};
  const place = {'@type':'Place',name:'Bülent Ecevit Kültür Merkezi',address:{streetAddress:'Datça/Muğla'}};
  const session = {citySlug:'mugla',venueSlug:'bulent-ecevit-kultur-merkezi',date:'2026-11-15T17:00:00Z'};
  const payload = {events:[{name:'Oyun',slug:'oyun',tags:[{name:'Tiyatro'}],sessions:[session,{...session,citySlug:'istanbul'},{...session,hideSession:true}]}]};
  const chunk = JSON.stringify([1,'8:' + JSON.stringify(payload) + '\n']);
  const rows = await readSource(source,async () => ld(place) + '<script>self.__next_f.push(' + chunk + ')</script>');
  assert.deepEqual(rows.map(row=>[row.time,row.category]),[['20:00','theatre']]);
});

test('venue profiles verify organizer and location, including Dadya’s province-only address',async () => {
  const source = {adapter:'jollin',url:'https://jollin.com.tr/dadyadostane/',venueAliases:['Dadya Dostane']};
  const url = 'https://jollin.com.tr/etkinlik/orkestra/';
  const profile = ld({'@type':'Organization',url:source.url});
  const index = profile + '<main><a href="/etkinlik/orkestra/">Dadya Orkestra</a><a href="/etkinlik/old/">1 Eki 2026</a></main>';
  const event = {...show,'@type':'Event',url,name:'Dadya Orkestra',image:[{url:'/uploads/media/show.webp'}],organizer:{url:source.url},
    location:{name:'Dadya Dostane',address:{addressLocality:'Muğla',addressRegion:'Muğla'}}};
  const detail = ld([event,{...event,location:{name:'Başka Sahne',address:'Bodrum'}},{...event,organizer:{url:'/other/'}},{...event,eventStatus:'EventCancelled'}]);
  const rows = await readSource(source,async page => {
    if (page === source.url) return index;
    assert.equal(page,url);
    return detail;
  },'2026-11-04');
  assert.deepEqual(rows.map(r => [r.category,r.poster]),[['music','https://jollin.com.tr/uploads/media/show.webp']]);
  assert.deepEqual(await readSource(source,async () => profile + '<main>Şu an yaklaşan etkinlik yok</main>'),[]);
  await assert.rejects(readSource(source,async () => profile + '<main>Yükleniyor</main>'));
});

test('dance performances use dated links, announcement posters and the club’s hours across midnight',async () => {
  const source = {adapter:'dance',url:'https://dancevents.net/venues/pandora-pub'};
  const place = {'@type':['DanceHall','LocalBusiness'],name:'Pandora Pub',url:source.url,address:{addressLocality:'Datça'}};
  const path = '/events/latin/2026-11-13';
  const index = ld(place) + '<a href="' + path + '">Dans gecesi</a>';
  const poster = 'https://s3.eu-west-1.amazonaws.com/dancevents.net/events/pandora.webp';
  const event = {'@type':'Event',name:'Latin Gecesi',location:place,url:'https://dancevents.net/events/latin',image:poster,startDate:'2026-11-13T21:00:00',endDate:'2026-11-13T23:59:00'};
  const read = patch => readSource(source,async page => page === source.url ? index : ld({...event,...patch}));
  const [row] = await read({description:'HER CUMA 🕤 21:30 – 00:00'});
  assert.deepEqual([row.start,row.time,row.end,row.closeTime,row.url,row.poster],['2026-11-13','21:30','2026-11-14','00:00','https://dancevents.net' + path,poster]);
  const [regular] = await read({image:'https://s3.eu-west-1.amazonaws.com/other-bucket/photo.webp'});
  assert.deepEqual([regular.time,regular.closeTime,regular.poster],['21:00','23:59',undefined]);
  assert.deepEqual(await read({eventStatus:'EventPostponed'}),[]);
  await assert.rejects(read({startDate:'2026-11-06T21:00:00'}));
});

test('a second listing can supply a missing poster without duplicating a show or changing its ID',() => {
  const original = normalize({...base,title:'Abdullah, Konuş!'},karia,checked);
  const duplicate = {...original,id:'other',title:'Abdullah Konuş!',poster:'https://jollin.com.tr/show.webp'};
  assert.deepEqual(mergeRows([original,duplicate],checked),[{...original,poster:duplicate.poster}]);
});
