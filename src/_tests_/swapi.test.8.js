test('Retorna 404 para planeta inexistente', async () => {
    const response = await request(baseUrl).get('/planets/999/');
    expect(response.status).toBe(404);
});
