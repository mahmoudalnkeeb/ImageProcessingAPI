"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const resizeImage = (req, res) => {
    const image = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const filePath = './build/assets/images/' + image;
    const resizedImage = './build/assets/thumps/output' + image;
    if (fs_1.default.existsSync(filePath) && width !== 0 && height !== 0) {
        (0, sharp_1.default)(filePath)
            .resize(width, height)
            .toFile(resizedImage)
            .then(() => {
            res.status(200).sendFile(path_1.default.join(__dirname, '..', `/assets/thumps/output${image}`));
        });
    }
    else {
        res.status(404).send('<h1 style="color:red">not found try again ;)</h1>');
    }
};
exports.resizeImage = resizeImage;
