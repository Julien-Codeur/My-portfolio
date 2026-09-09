/**
 * Convertit les JPEG du portfolio en WebP (qualité 82).
 * Usage: npm run images:webp
 */
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const roots = [
  'public/images/projects',
  'public/images/profile',
  'public/images/about',
  'public/images/blog',
];

async function convertDir(dir) {
  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    return;
  }

  for (const entry of entries) {
    if (!/\.jpe?g$/i.test(entry)) continue;
    const input = path.join(dir, entry);
    const output = path.join(dir, entry.replace(/\.jpe?g$/i, '.webp'));
    const info = await sharp(input).webp({ quality: 82 }).toFile(output);
    const src = await stat(input);
    console.log(
      `${input} → ${output} (${Math.round(src.size / 1024)}KB → ${Math.round(info.size / 1024)}KB)`
    );
  }
}

await Promise.all(roots.map(convertDir));
