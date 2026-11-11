export interface DestinationDetail {
  sections: { heading: string; paragraphs: string[] }[];
  map: { label: string; query: string };
  access: string[];
  routes?: string[];
  stayNote: string;
  stayIds: string[];
  sources: { title: string; url: string }[];
}
