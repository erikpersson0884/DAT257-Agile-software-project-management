import request from 'supertest';
import { expect } from 'chai';

describe('GET /', () => {
  it('responds with JSON', async () => {
    const { default: app } = await import('../server.js'); // Using import dynamically
    const res = await request(app)
      .get('/api/donations/getLeaderboard')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body).to.be.an('array');
  });
});
