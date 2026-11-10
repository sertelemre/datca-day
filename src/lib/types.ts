export interface Article {
  id: number;
  title: string;
  slug: string;
  path: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  categories: number[];
  seoTitle?: string;
  updatedDate?: string;
  visitStops?: string[];
  faqs?: { question: string; answer: string }[];
  sources?: { title: string; url: string }[];
  reviewNotes?: string;
  imageCaption?: string;
  imageAlt?: string;
  gallery?: {src:string;alt:string;caption?:string}[];
  noindex?: boolean;
  canonicalPath?: string;
  basePath?: string;
  visitPlan?: {
    facts: { label: string; value: string }[];
    links: { label: string; url: string; action: 'directions' | 'source' | 'phone' }[];
    note: string;
  };
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  path: string;
  description: string;
  parent: number;
  count: number;
  intro?: string;
  noindex?: boolean;
  basePath?: string;
}
export interface SiteContent { articles: Article[]; categories: Category[]; }
