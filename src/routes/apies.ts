import { Router, Response, Request } from 'express';
import { resizeImage } from '../utils/sharp';
const router = Router();

router.get('/', (req: Request, res: Response): void => {
    res.status(200).send('Welcome To Image Processing API');
});
router.use('/api/images', resizeImage);

export default router;
