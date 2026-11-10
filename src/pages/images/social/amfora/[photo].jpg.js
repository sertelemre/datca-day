import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const photosDirectory = 'public/images/social';

export async function getStaticPaths() {
  const files = await readdir(photosDirectory);
  return files.filter(file => file.endsWith('.jpg')).map(file => ({
    params: { photo: file.slice(0, -4) },
    props: { file },
  }));
}

// Centre the logo inside the square crop some apps use for link thumbnails.
const plaque = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="316" height="88"><rect width="316" height="88" rx="6" fill="#faf8f2"/></svg>');
const logo = sharp('public/images/datca-day.svg', { density: 144 }).resize(268).png().toBuffer();

/** @type {import('astro').APIRoute} */
export const GET = async ({ props }) => {
  const image = await sharp(join(photosDirectory, props.file))
    .resize(1200, 630, { fit: 'cover' })
    .composite([
      { input: plaque, left: 442, top: 492 },
      { input: await logo, left: 466, top: 503 },
    ])
    .jpeg({ quality: 90 })
    .toBuffer();

  return new Response(new Uint8Array(image), { headers: { 'Content-Type': 'image/jpeg' } });
};
