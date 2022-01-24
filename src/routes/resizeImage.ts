import path from 'path';
import express from 'express';
import fs from 'fs';
import resize from '../utils/resize';
const appDir = process.cwd();

//handle /api/images route

export const resizeImage = (req: express.Request, res: express.Response) => {
    const image = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    //main file path
    const filePath = path.normalize(
        path.join(appDir, `/assets/images/${image}`)
    );

    //output file path

    const outputPath = path.normalize(
        path.join(appDir, `/assets/thumps/${width}_${height}_${image}`)
    );

    if (fs.existsSync(outputPath)) {
        res.sendFile(outputPath);
    } else if (fs.existsSync(filePath) && width !== 0 && height !== 0) {
        try {
            resize(width, height, filePath, outputPath).then(() => {
                res.status(200).sendFile(outputPath);
            });
        } catch (error) {
            res.status(500).send(
                '<code style="color:red">an error accured</code>'
            );
            throw error;
        }
    } else {
        res.status(404).send(
            '<h1 style="color:red">not found try again ;)</h1>'
        );
    }
};
