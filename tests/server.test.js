// tests/server.test.js

const request = require('supertest');
const app = require('../app'); // Assuming your Express app is in the 'app.js' file
const expect = require('chai').expect;

describe('GET /api/users', () => {
  it('responds with JSON', (done) => {
    request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
