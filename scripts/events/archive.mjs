import {mergeRows} from './adapters.mjs';

// Keep URL-bearing records in the same atomic snapshot as the live feed.
// Only events that were actually published are admitted to the permanent archive.
export function reconcileEvents(previous, fetched, today, cutoff) {
  const recent = previous.events.filter(row => row.end < today && row.end >= cutoff);
  const events = mergeRows([...fetched, ...recent], cutoff);
  const listed = new Set(events.map(row => row.id));
  const archiveById = new Map();
  for (const row of [...(previous.archive || []), ...previous.events]) {
    if (!listed.has(row.id)) archiveById.set(row.id, row);
  }
  const archive = [...archiveById.values()].sort((a,b) => b.end.localeCompare(a.end) || a.id.localeCompare(b.id));
  return {events, archive};
}
