const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../src/app');
const Post = require('../../src/models/Post');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('POST /api/posts', () => {
  it('creates a new post', async () => {
    const newPost = { title: 'Test Post', content: 'Test content' };

    const res = await request(app).post('/api/posts').send(newPost);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test Post');
  });
});
