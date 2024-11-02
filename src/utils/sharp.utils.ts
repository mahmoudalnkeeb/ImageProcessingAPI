import sharp from 'sharp';

export async function resizeImage(image: Buffer, width: number, height: number): Promise<Buffer > {
  return await sharp(image).resize(width, height).toBuffer();
}
