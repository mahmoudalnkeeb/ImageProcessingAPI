import { Request, Response } from 'express';

export default (_req: Request, res: Response) => {
  res.status(404).json({
    code: 404,
    status: 'Error',
    message: 'Route not found.',
    data: null,
  });
};
