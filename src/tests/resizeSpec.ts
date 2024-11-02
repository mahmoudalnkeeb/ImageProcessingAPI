import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import { resizeImage } from '../utils/sharp.utils';

const image = path.normalize(path.join(process.cwd(), `/assets/test/test.jpg`));

describe('Image Processing API', () => {
  it('should be instance of Sharp', () => {
    const imageBuffer = fs.readFileSync(image);
    expect(resizeImage(imageBuffer, 300, 300)).toBeInstanceOf(sharp);
  });
});
