export const stayKinds = {
  otel: 'hotel', 'apart otel': 'apart', pansiyon: 'guest', 'butik otel': 'boutique',
  'ozel konaklama tesisi': 'special', motel: 'motel', camping: 'camp', 'kamping, pansiyon': 'camp',
  'kirsal turizm tesisi': 'country', 'ciftlik evi-koy evi': 'country', rental: 'rental', application: 'pending',
} as const;

export const stayKind = (type: string) => stayKinds[type as keyof typeof stayKinds];

export const turkishStayLabels = {
  hotel: 'Otel', apart: 'Apart otel', guest: 'Pansiyon', boutique: 'Butik otel', special: 'Özel konaklama tesisi',
  country: 'Kırsal konaklama', camp: 'Kamping', motel: 'Motel', rental: 'Turizm amaçlı konut', pending: 'Başvurusu olan tesis',
};

export function stayMapUrl(stay: { name: string; alias?: string; address?: string; coordinates?: number[] }) {
  if (stay.coordinates) return 'https://www.google.com/maps/dir/?api=1&destination=' + stay.coordinates.join(',');
  const query = [stay.alias || stay.name, stay.address, 'Datça, Muğla'].filter(Boolean).join(', ');
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
}
