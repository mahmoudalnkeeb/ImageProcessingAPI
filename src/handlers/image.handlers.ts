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

export async function cropHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { width, height, x, y } = req.body;

    if (!req.file) {
      res.send('Image file required!');
      return;
    }
    if (!width || !height || !x || !y) {
      res.send('Width, Height, X & Y required!');
      return;
    }

    // crop image logic
  } catch (error) {
    next(error);
  }
}

export async function waterMarkHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { text, x, y } = req.body;

    if (!req.file) {
      res.send('Image file required!');
      return;
    }
    if (!text || !x || !y) {
      res.send('Text & Position required!');
      return;
    }

    // watermark
  } catch (error) {
    next(error);
  }
}

export async function convertHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { format, quality } = req.body;
    if (!req.file) {
      res.send('Image file required!');
      return;
    }
    if (!format) {
      res.send('Format required!');
      return;
    }

    // change format logic
  } catch (error) {
    next(error);
  }
}
