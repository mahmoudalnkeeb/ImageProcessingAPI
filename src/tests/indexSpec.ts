import supertest from 'supertest';
import app from '../index';
const request = supertest(app);

let imgUrl = '/api/images?filename=fjord.jpg&width=3000&height=1000';

describe('Image Processing API', () => {
  describe('test endpoint requests', () => {
    it('should return success code', async () => {
      const res = await request.get('/');
      expect(res.statusCode).toBe(200);
    });

    it('resize should return success code', async () => {
      const res = await request.get(imgUrl);
      expect(res.statusCode).toBe(200);
    });
    it('resize should return content type of image/jpeg', async () => {
      const res = await request.get(imgUrl);
      expect(res.headers['content-type']).toBe('image/jpeg');
    });
  });
});
