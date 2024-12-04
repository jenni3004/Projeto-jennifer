test('Retorna os dados do planeta Tatooine', async () => {
    const response = await request(baseUrl).get('/planets/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Tatooine');
    expect(response.body.population).toBe('200000');
});
