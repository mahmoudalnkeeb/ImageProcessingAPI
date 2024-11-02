import fs from 'fs';
import path from 'path';
import supertest from 'supertest';
import app from '../index';
const request = supertest(app);

const image = path.normalize(path.join(process.cwd(), `/assets/test/test.jpg`));

describe('Image Processing API', () => {
  describe('test views', () => {
    it('GET /images/resize should return success code', async () => {
      const res = await request.get('/images/resize');
      expect(res.statusCode).toBe(200);
    });
  });
  describe('test image processing response status', () => {
    it('POST /images/resize should return success code', async () => {
      const res = await request
        .post('/images/resize')
        .type('form')
        .attach('image', fs.readFileSync(image), { filename: 'test.jpg', contentType: 'image/jpeg' })
        .field('width', 500)
        .field('height', 320);
      expect(res.statusCode).toBe(200);
    });
  });

  describe('test image processing response content type', () => {
    it('POST /images/resize should return content type of image/jpeg', async () => {
      const res = await request
        .post('/images/resize ')
        .type('form')
        .attach('image', fs.readFileSync(image), { filename: 'test.jpg', contentType: 'image/jpeg' })
        .field('width', 500)
        .field('height', 320);
      expect(res.headers['content-type']).toBe('image/jpeg');
    });
  });
});
