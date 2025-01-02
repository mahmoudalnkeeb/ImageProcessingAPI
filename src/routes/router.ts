import express from 'express';
import imagesRouter from './images';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    res.render('index', { page: 'home', title: 'image processing' });
  } catch (error) {
    next(error);
  }
});
router.use('/images', imagesRouter);

export default router;
