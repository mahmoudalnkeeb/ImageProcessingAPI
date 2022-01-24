import path from 'path';
const appDir = process.cwd();
import resize from '../utils/resize';

let image = path.normalize(path.join(appDir, `/assets/images/fjord.jpg`));
let resizePath = path.normalize(path.join(appDir, `/assets/thumps/fjord1.jpg`));

describe('Image Processing API', () => {
    it("shouldn't return err", () => {
        resize(300, 300, image, resizePath).catch((err) => {
            expect(err).toBeFalsy();
        });
    });
});
