import sharp from 'sharp';
import path from 'path';
const appDir = process.cwd();

let image = path.normalize(path.join(appDir, `/assets/images/fjord.jpg`));
let resizePath = path.normalize(path.join(appDir, `/assets/output/fjord1.jpg`));

describe('Image Processing API', () => {
    it('should return informatin object', () => {
        sharp(image)
            .resize(300, 300)
            .toFile(resizePath, (err: Error, info: sharp.OutputInfo) => {
                expect(info).toEqual({
                    format: 'jpeg',
                    width: 300,
                    height: 300,
                    channels: 3,
                    premultiplied: false,
                    size: 14593,
                });
            });
    });
});
