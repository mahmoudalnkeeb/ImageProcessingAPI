import express from 'express';
import { resizeImage } from './resizeImage';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'imageResizer' });
});
router.use('/api/images', resizeImage);

export default router;
