//Teste 1
const request = require('supertest');
const baseUrl = 'https://swapi.dev/api';

test('Retorna a lista de planetas', async () => {
    const response = await request(baseUrl).get('/planets/');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeInstanceOf(Array);
});

//Teste 2
test('Retorna os dados do planeta Tatooine', async () => {
    const response = await request(baseUrl).get('/planets/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Tatooine');
    expect(response.body.population).toBe('200000');
});

//Teste 3
test('Retorna a lista de naves', async () => {
    const response = await request(baseUrl).get('/starships/');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeInstanceOf(Array);
});

//Teste 4
test('Retorna os dados da Millennium Falcon', async () => {
    const response = await request(baseUrl).get('/starships/10/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Millennium Falcon');
    expect(response.body.model).toBe('YT-1300 light freighter');
});

//Teste 5
test('Retorna a lista de filmes', async () => {
    const response = await request(baseUrl).get('/films/');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeInstanceOf(Array);
});

//Teste 6
test('Retorna os dados do filme A New Hope', async () => {
    const response = await request(baseUrl).get('/films/1/');
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('A New Hope');
    expect(response.body.episode_id).toBe(4);
});

//Teste 7
test('Retorna 404 para rota inexistente', async () => {
    const response = await request(baseUrl).get('/heroes/');
    expect(response.status).toBe(404);
});
//Teste 8 
test('Retorna 404 para planeta inexistente', async () => {
    const response = await request(baseUrl).get('/planets/999/');
    expect(response.status).toBe(404);
});

//Teste 9
test('Retorna veículos na resposta', async () => {
    const response = await request(baseUrl).get('/vehicles/');
    expect(response.status).toBe(200);
    expect(response.body.count).toBeGreaterThan(0);
});

//Teste 10
test('Retorna os dados da espécie Wookiee', async () => {
    const response = await request(baseUrl).get('/species/3/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Wookie');
    expect(response.body.language).toBe('Shyriiwook');
});
