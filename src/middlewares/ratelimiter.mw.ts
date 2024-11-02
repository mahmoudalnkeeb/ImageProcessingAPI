import { NextFunction, Request, Response } from 'express';

const requests: Map<string, number[]> = new Map();
const interval = 60000;

setInterval(() => {
  requests.clear();
}, interval);

export default (limit = 100) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const ip = req.ip as string;
    const currentTime = Date.now();

    if (!requests.has(ip)) {
      requests.set(ip, []);
    }

    const timestamps = requests.get(ip) as number[];

    const timeWindowStart = currentTime - interval;
    const filteredTimestamps = timestamps.filter((timestamp) => timestamp > timeWindowStart);

    filteredTimestamps.push(currentTime);
    requests.set(ip, filteredTimestamps);

    if (filteredTimestamps.length > limit) {
      res.status(429).json({
        code: 429,
        status: 'Error',
        message: 'Rate limit exceeded.',
        data: {
          limit,
          remaining: 0,
          resetTime: new Date(currentTime + interval).toISOString(),
        },
      });
      return;
    }

    next();
  };
};
