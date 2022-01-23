import sharp from 'sharp';

function resize(
    width: number,
    height: number,
    filePath: string,
    outputPath: string
) {
    return sharp(filePath).resize(width, height).toFile(outputPath);
}
export default resize;
