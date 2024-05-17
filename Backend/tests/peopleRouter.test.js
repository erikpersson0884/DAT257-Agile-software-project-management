import request from 'supertest';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';



describe('POST /', () => {
  it('POST/  getUsers', async () => {
    const { default: app } = await import('../server.js');

    var admin_email = ""
    var admin_pass = ""

    // Commented until admin login exists.
    //const res1 = await request(app)
     // .post('/api/people/getusers')
     // .send({ email: admin_email, password: admin_pass })      
     // .expect(200);


    const res2 = await request(app)
    .post('/api/people/getusers')
    .send({ email: 'johnthecoolguy@gmail.com', password: 'wrongpassword' })      
    .expect(403);

  });
  
});


describe('POST /', () => {
    it('POST/ addUser', async () => {
      const { default: app } = await import('../server.js');
      const pathToFile = path.resolve('../backend/data/users.json');
      
      // Read initial contents of the file
      const initialFileContents = fs.readFileSync(pathToFile, 'utf8');
      const initialJsonData = JSON.parse(initialFileContents);
      var lengthBefore = initialJsonData.length;

      await request(app)
        .post('/api/people/adduser')
        .send({ name: "test", email: 'test@test.com', password: 'test' })
        .expect(200);
  
      // Read updated contents of the file
      const updatedFileContents = fs.readFileSync(pathToFile, 'utf8');
      const updatedJsonData = JSON.parse(updatedFileContents);
      var lengthAfter = updatedJsonData.length;
      
      expect(lengthAfter > lengthBefore)
    });
  });



  describe('POST /', () => {
    it('POST/ addUser adds user object to JSON', async () => {
      const { default: app } = await import('../server.js');
      const pathToFile = path.resolve('../backend/data/users.json');
      
      // Read initial contents of the file
      const initialFileContents = fs.readFileSync(pathToFile, 'utf8');
      const initialJsonData = JSON.parse(initialFileContents);
      var lengthBefore = initialJsonData.length;

      await request(app)
        .post('/api/people/adduser')
        .send({ name: "test", email: 'test@test.com', password: 'test' })
        .expect(200);
  
      // Read updated contents of the file
      const updatedFileContents = fs.readFileSync(pathToFile, 'utf8');
      const updatedJsonData = JSON.parse(updatedFileContents);
      var lengthAfter = updatedJsonData.length;
      
      expect(lengthAfter > lengthBefore)
    });
  });