import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default function (objSchema: ObjectSchema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { error } = objSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.details[0].message,
        data: null,
        success: false,
      });
      return;
    }
    next();
  };
}
