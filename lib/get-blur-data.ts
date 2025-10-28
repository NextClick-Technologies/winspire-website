import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function getBlurData(imagePath: string) {
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  const file = await fs.readFile(fullPath);
  const { base64 } = await getPlaiceholder(file);
  return base64;
}