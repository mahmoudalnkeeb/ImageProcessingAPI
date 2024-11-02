import { NextFunction, Request, Response } from 'express';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err) {
    console.error(err.stack);
    res.status(500).json({
      code: 500,
      status: 'Error',
      message: err.message || 'Internal Server Error',
    });
  }
};
