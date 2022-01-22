"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
let base_url = 'http://127.0.0.1:3000/';
let imgUrl = 'http://127.0.0.1:3000/api/images?filename=fjord.jpg&width=3000&height=1000';
describe('Image Processing API', function () {
    describe('GET /', function () {
        it('should return success code', function () {
            request_1.default.get(base_url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
            });
        });
        it('should return Welcome To Image Processing API', function () {
            request_1.default.get(base_url, function (error, response, body) {
                expect(body).toEqual('Welcome To Image Processing API');
            });
        });
        it('resize should return success code', function () {
            request_1.default.get(imgUrl, function (error, response, body) {
                expect(response.statusCode).toBe(200);
            });
        });
    });
});
