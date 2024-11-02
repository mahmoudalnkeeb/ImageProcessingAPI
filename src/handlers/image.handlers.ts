import { Request, Response, NextFunction } from 'express';
import { resizeImage } from '../utils/sharp.utils';

export async function resizeHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { width, height } = req.body;

    if (!req.file) {
      res.send('Image file required!');
      return;
    }
    if (!width || !height) {
      res.send('Width & Height required!');
      return;
    }

    const { filename, mimetype, buffer, originalname, size } = req.file;
    const resizedImage = resizeImage(buffer, +width, +height);
    res.set('Content-Type', mimetype);
    resizedImage.pipe(res);
  } catch (error) {
    next(error);
  }
}
