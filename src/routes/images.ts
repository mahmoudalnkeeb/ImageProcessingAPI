import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { resizeHandler } from '../handlers/image.handlers';

const imagesRouter: Router = Router();
// views
imagesRouter.get('/resize', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render('pages/resize', { title: 'image processing - resize' });
  } catch (error) {
    next(error);
  }
});

const upload = multer({ storage: multer.memoryStorage() });
// handlers
imagesRouter.post('/resize', upload.single('image'), resizeHandler);
imagesRouter.post('/crop', upload.single('image'));
imagesRouter.post('/convert', upload.single('image'));
imagesRouter.post('/watermark', upload.single('image'));

export default imagesRouter;
