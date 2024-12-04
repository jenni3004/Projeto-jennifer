const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

test('Retorna a lista de planetas', async () => {
    const response = await request(baseUrl).get('/planets/');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeInstanceOf(Array);
});
