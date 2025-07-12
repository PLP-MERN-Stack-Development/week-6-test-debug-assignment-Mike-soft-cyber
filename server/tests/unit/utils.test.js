js 
const { generateToken } = require('../../src/utils/auth'); 
test('generates token', () => { 
    const token = generateToken({ id: '123' }); 
    expect(typeof token).toBe('string'); 
});