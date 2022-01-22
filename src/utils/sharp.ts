import express from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';

export const resizeImage = (
    req: express.Request,
    res: express.Response
): void => {
    const image = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const filePath = './build/assets/images/' + image;
    const resizedImage = './build/assets/thumps/output' + image;

    if (fs.existsSync(filePath) && width !== 0 && height !== 0) {
        sharp(filePath)
            .resize(width, height)
            .toFile(resizedImage)
            .then(() => {
                res.status(200).sendFile(
                    path.join(__dirname, '..', `/assets/thumps/output${image}`)
                );
            });
    } else {
        res.status(404).send(
            '<h1 style="color:red">not found try again ;)</h1>'
        );
    }
};
