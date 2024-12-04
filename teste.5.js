test('Retorna a lista de filmes', async () => {
    const response = await request(baseUrl).get('/films/');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeInstanceOf(Array);
});
