import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { readShifts, mergeShifts } from './update.mjs';
import { visibleShifts } from '../../src/lib/pharmacy-shifts.mjs';

const directory = JSON.parse(readFileSync(new URL('../../src/lib/pharmacies.json', import.meta.url)));
const now = new Date('2026-11-10T11:00:00+03:00');
const night = { id: 'gulin-eczanesi', start: '2026-11-10T18:00:00+03:00', end: '2026-11-11T09:00:00+03:00' };
const previous = { id: 'anil-eczanesi', start: '2026-11-09T18:00:00+03:00', end: '2026-11-10T09:00:00+03:00' };
const interval = '10.11.2026 18:00 - 11.11.2026 09:00';
function card({name = 'GÜLİN ECZANESİ', city = 'DATÇA', times = interval, tel = ''} = {}) {
  return `<div class="row nobetci"><h4><strong>${name}</strong> - ${city}</h4>
    <a href="tel:${tel}"></a><span class="text-danger">${times}</span></div>`;
}

test('recognises the official district, Turkish name and shift times', () => {
  assert.deepEqual(readShifts(card({city:'BODRUM'}) + card(), directory, now), [night]);
});
test('rejects stale, unknown, conflicting and malformed records', () => {
  const otherPhone = directory.find(p => p.id === previous.id).phone;
  for (const row of [card({city:'MUĞLA'}), card({name:'Bilinmeyen Eczanesi'}), card({tel:otherPhone}),
    card({times:'01.11.2026 18:00 - 02.11.2026 09:00'}), card({times:'18:00 - 09:00'}),
    card({times:'10.11.2026 18:00 - 10.11.2026 09:00'})]) {
    assert.throws(() => readShifts(row, directory, now));
  }
});
test('keeps an overnight shift across source rollover and applies corrections for the published day', () => {
  assert.deepEqual(mergeShifts([previous, {...night, id:'yanlis'}], [night, night], now), [previous, night]);
  assert.deepEqual(mergeShifts([previous], [night], new Date(night.end)), [night]);
});
test('uses Türkiye time, keeps overnight duty after midnight and switches exactly at shift boundaries', () => {
  const select = time => visibleShifts([previous, night], Date.parse(time));
  assert.deepEqual(select('2026-11-09T22:30:00Z'), {status:'active', shifts:[previous]});
  assert.deepEqual(select(previous.end), {status:'scheduled', shifts:[night]});
  assert.deepEqual(select(night.start), {status:'active', shifts:[night]});
  assert.deepEqual(select('2026-11-11T01:00:00+03:00'), {status:'active', shifts:[night]});
  assert.deepEqual(select(night.end).shifts, []);
  assert.deepEqual(select('2026-11-08T20:00:00+03:00').shifts, []);
});
test('shows all concurrently published duty pharmacies', () => {
  const second = {...night, id:'aktur-eczanesi'};
  assert.deepEqual(visibleShifts([night, second], Date.parse(night.start)).shifts, [night, second]);
});
