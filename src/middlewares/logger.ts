import express from 'express';
import { newLine } from '../utils/log.utils';

function logger(req: express.Request, res: express.Response, next: express.NextFunction): void {
  const ignoredPaths = ['/', '/favicon.ico'];
  const url = req.url;
  console.log(newLine(`path :  ${url} -- is visited`));

  if (ignoredPaths.includes(req.path)) return next();

  const query = JSON.stringify(req.query);
  const path = req.path;
  console.log(newLine(`path: %s| query: %s`), path, query);

  next();
}

export default logger;
