import express from 'express';

export const logger = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    const url = req.url;
    const width = req.query.width;
    const height = req.query.height;

    if (req.path == '/') {
        console.log(`
        
        path :  ${url} -- is visited`);
    } else if (req.path == '/api/images') {
        console.log(
            `

        path : ${url} -- is visited
        size : ${width} × ${height}`
        );
    }

    next();
};
