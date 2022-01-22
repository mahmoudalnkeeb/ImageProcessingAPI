"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    const url = req.url;
    console.log(`info: ${url} is visited`);
    next();
};
exports.logger = logger;
