test('Retorna a lista de naves', async () => {
    const response = await request(baseUrl).get('/starships/');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeInstanceOf(Array);
});
