import sharp from 'sharp';

export function resizeImage(image: Buffer, width: number, height: number) {
  return sharp(image).resize(width, height);
}

export function crop(image: Buffer, width: number, height: number, gravity: number) {
  return sharp(image).resize(width, height);
}
