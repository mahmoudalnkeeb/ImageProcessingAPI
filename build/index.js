"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const apies_1 = __importDefault(require("./routes/apies"));
const logger_1 = require("./middlewares/logger");
//middlewares
app.use(logger_1.logger);
app.use(apies_1.default);
const port = 3000;
app.listen(port, () => {
    console.log('server is working on http://127.0.0.1:' + port);
});
exports.default = app;
