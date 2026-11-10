import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseRoute, parseHavasDirection } from './update-transport.mjs';

const source = 'https://ulasim.muttas.com.tr/hat/9-3-datca-mesudiye-231';
const checked = '2026-11-10';
const block = '<section class="schedule-day"><h3>Hafta İçi</h3><div class="direction-panel"><h4>Datça</h4><div class="departure" data-time="07:00"><span class="time-suffix"><i data-symbol="kirmizi"></i></span></div></div><div class="direction-panel variable-direction"><h4>Dalaman Havalimanı</h4></div></section>';
const fixture = (inner) => '<meta name="last-modified" content="2026-11-09T14:00:00+03:00"><main class="line-detail" data-line-code="9-3" data-line-slug="9-3-datca-mesudiye-231"><h1>Datça - Mesudiye</h1><article class="information-item"><i data-symbol="kirmizi"></i><p>Damarası</p></article><section class="timetable">'+inner+'</section></main>';

test('retains stop-specific notes, merges only identical timetable blocks and distinguishes flight arrivals', () => {
  const route = parseRoute(fixture(block+block),source,checked);
  assert.equal(route.days.length,1);
  assert.deepEqual(route.days[0].directions,[{from:'Datça',times:['07:00'],annotations:{'07:00':'Damarası'}},{from:'Dalaman Havalimanı',times:[],flight:true}]);
  assert.equal(route.sourceUpdated,'2026-11-09T14:00:00+03:00');
});

test('does not convert a broken upstream page to a published empty timetable', () => {
  assert.throws(()=>parseRoute('<html>Maintenance</html>',source,checked));
  assert.throws(()=>parseRoute(fixture(''),source,checked));
  assert.throws(()=>parseRoute(fixture(block.replace('07:00','25:70')),source,checked));
  assert.deepEqual(parseRoute(fixture('Güncel sefer saati bulunamadı.'),source,checked).days,[]);
});

test('preserves Havaş date-specific departure and domestic-flight or suspension conditions', () => {
  assert.deepEqual(parseHavasDirection({statusCode:'HizmetVeriyor',timeDataEntryTypeCode:'Saatlik',timeList:['05:30','23:55']},'Marmaris').times,['05:30','23:55']);
  const note = 'İç hat uçuşlarına göre.';
  assert.deepEqual(parseHavasDirection({statusCode:'HizmetVeriyor',timeDataEntryTypeCode:'Aciklama',informationNote:'<p>'+note+'</p>'},'Dalaman'),{from:'Dalaman',times:[],note});
  assert.equal(parseHavasDirection({statusCode:'HizmetVermiyor',statusNote:'Sefer yok.'},'Marmaris').note,'Sefer yok.');
  assert.throws(()=>parseHavasDirection({statusCode:'HizmetVeriyor',timeDataEntryTypeCode:'Saatlik',timeList:['26:01']},'Marmaris'));
});

test('shipped routes have unique URLs, dated operator provenance and valid departures', () => {
  const {routes} = JSON.parse(readFileSync(new URL('../src/lib/transport-data.json',import.meta.url),'utf8'));
  assert.equal(routes.length,new Set(routes.map(route=>route.slug)).size);
  for(const key of ['datca-marmaris-48-16','marmaris-otogar-dalaman-havalimani-48-26','marmaris-dalaman-havas','bodrum-datca-48-48']) assert.ok(routes.some(route=>route.slug===key));
  for(const route of routes) {
    assert.ok(['havas.net','ulasim.muttas.com.tr'].includes(new URL(route.source).hostname));
    assert.match(route.checked,/^\d{4}-\d\d-\d\d$/);
    for(const day of route.days) {
      assert.ok(day.directions.length);
      for(const direction of day.directions) {
        assert.ok(direction.from);
        direction.times.forEach(time=>assert.match(time,/^(?:[01]\d|2[0-3]):[0-5]\d$/));
      }
    }
  }
});
