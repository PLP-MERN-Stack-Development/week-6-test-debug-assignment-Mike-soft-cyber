const request = require('supertest'); 
const app = require('../../src/app'); 

test('registers user', async () => { 
    const res = await request(app).post('/api/users/register').send({ email: 'test@example.com', password: 'password123' }); 
    expect(res.status).toBe(201); 
});