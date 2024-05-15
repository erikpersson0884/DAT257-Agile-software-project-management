import request from 'supertest';
import { expect } from 'chai';


describe('POST /', () => {
  it('Login test', async () => {
    const { default: app } = await import('../server.js'); // Using import dynamically

    const res1 = await request(app)
      .post('/api/auth/login')
      .send({ email: 'johnthecoolguy@gmail.com', password: 'massivepeepoo' })      
      .expect(200);


    const res2 = await request(app)
    .post('/api/auth/login')
    .send({ email: 'johnthecoolguy@gmail.com', password: 'wrongpassword' })      
    .expect(401);

  });
  
});


describe('POST /', () => {
  it('TestAdminKey test', async () => {
    const { default: app } = await import('../server.js'); // Using import dynamically

    const login_res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'johnthecoolguy@gmail.com', password: 'massivepeepoo' })      
      .expect(200);

    const adminKey = login_res.body.adminKey;
    console.log(adminKey)

    const res1 = await request(app)
      .post('/api/auth/testAdminKey')
      .send({ adminKey: '123' })    
      .expect(401);

      const res2 = await request(app)
      .post('/api/auth/testAdminKey')
      .send({ adminKey: adminKey })
      .expect(200);

  });
  
});
