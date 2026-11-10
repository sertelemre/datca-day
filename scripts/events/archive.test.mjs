import test from 'node:test';
import assert from 'node:assert/strict';
import {hasEnded} from '../../src/lib/event-dates.ts';
import {reconcileEvents} from './archive.mjs';

const show = {id:'first-id',title:'Apsolit',start:'2026-12-05',end:'2026-12-05',time:'19:30',venue:'Datça',sourceId:'karia',checked:'2026-12-04'};
const later = {...show,id:'next-id',start:'2027-02-18',end:'2027-02-18'};
test('a previously published URL survives source removal, retention expiry and repeated refreshes',() => {
  const first = reconcileEvents({events:[show]},[], '2026-12-08','2026-12-01');
  assert.deepEqual(first,{events:[show],archive:[]});
  const expired = reconcileEvents(first,[], '2026-12-13','2026-12-06');
  assert.deepEqual(expired,{events:[],archive:[show]});
  assert.deepEqual(reconcileEvents(expired,[], '2027-01-10','2027-01-03'),expired);
});
test('a withdrawn future announcement keeps its page but leaves current listings',() => {
  const initial = {events:[show,later]};
  const changed = reconcileEvents(initial,[show], '2026-12-01','2026-11-24');
  assert.deepEqual(changed,{events:[show],archive:[later]});
  const restored = reconcileEvents(changed,[show,later], '2026-12-01','2026-11-24');
  assert.deepEqual(restored,{events:[show,later],archive:[]});
});
test('newly discovered, already old rows do not create fake publication history',() => {
  assert.deepEqual(reconcileEvents({events:[]},[show], '2027-01-10','2027-01-03'),{events:[],archive:[]});
});

test('archive past status respects a confirmed end time and local midnight for all-day events',() => {
  const timed = {end:'2026-12-10', closeTime:'21:55'};
  assert.equal(hasEnded(timed,new Date('2026-12-10T18:54:59Z')),false);
  assert.equal(hasEnded(timed,new Date('2026-12-10T18:55:00Z')),true);
  assert.equal(hasEnded({end:timed.end},new Date('2026-12-10T20:59:59Z')),false);
  assert.equal(hasEnded({end:timed.end},new Date('2026-12-10T21:00:00Z')),true);
});
