import request from 'supertest';
import { expect } from 'chai';

describe('GET /api/users', () => {
  it('responds with JSON', async () => {
    const { default: app } = await import('../server'); // Using import dynamically
    const res = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body).to.be.an('array');
  });
});
