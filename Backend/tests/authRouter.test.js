import request from 'supertest';
import { expect } from 'chai';


describe('POST /', () => {
  it('Login test', async () => {
    const { default: app } = await import('../server.js'); // Using import dynamically
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'johnthecoolguy@gmail.com', password: 'massivepeepoo' })      
      .expect(200);
  });
});
