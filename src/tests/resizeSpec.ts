import path from 'path';
import { resizeImage } from '../utils/sharp.utils';
const appDir = process.cwd();

let image = path.normalize(path.join(appDir, `/assets/images/fjord.jpg`));
let resizePath = path.normalize(path.join(appDir, `/assets/thumps/fjord1.jpg`));

describe('Image Processing API', () => {
  it("shouldn't return err", () => {
    resizeImage(Buffer.from([]) ,300, 300).catch((err) => {
      expect(err).toBeFalsy();
    });
  });
});
