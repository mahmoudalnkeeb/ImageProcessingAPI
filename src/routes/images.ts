import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { cropHandler, resizeHandler, convertHandler, waterMarkHandler } from '../handlers/image.handlers';
import validation from '../middlewares/validation';
import resizeSchema from '../validation/resize.schema';
import cropSchema from '../validation/crop.schema';
import converSchema from '../validation/conver.schema';
import watermarkSchema from '../validation/watermark.schema';
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
imagesRouter.post('/resize', upload.single('image'), validation(resizeSchema), resizeHandler);
imagesRouter.post('/crop', upload.single('image'), validation(cropSchema), cropHandler);
imagesRouter.post('/convert', upload.single('image'), validation(converSchema), convertHandler);
imagesRouter.post('/watermark', upload.single('image'), validation(watermarkSchema), waterMarkHandler);

export default imagesRouter;
