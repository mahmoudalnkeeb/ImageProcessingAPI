"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sharp_1 = require("../utils/sharp");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).send('Welcome To Image Processing API');
});
router.use('/api/images', sharp_1.resizeImage);
exports.default = router;
