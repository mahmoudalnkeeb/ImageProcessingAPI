import sharp, { FormatEnum } from 'sharp';

export function resizeImage(image: Buffer, width: number, height: number) {
  return sharp(image).resize(width, height);
}

export function crop(image: Buffer, width: number, height: number, top: number, left: number) {
  return sharp(image).extract({
    height,
    width,
    top,
    left,
  });
}

export function format(image: Buffer, format: keyof FormatEnum, quality: number) {
  return sharp(image).toFormat(format, { quality });
}

export function watermark(
  image: Buffer,
  watermarkText: string,
  fontFamily: string,
  fontSize: string,
  fill: string,
  top: number,
  left: number
) {
  return sharp(image).composite([
    {
      input: Buffer.from(
        `<svg><text x="${left}" y="${top}" font-family="${fontFamily}" font-size="${fontSize}" fill="${fill}">${watermarkText}</text></svg>`
      ),
      top,
      left,
    },
  ]);
}
