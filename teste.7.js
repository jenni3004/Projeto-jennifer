test('Deve retornar 404 para rota inexistente', async () => {
    const response = await request(baseUrl).get('/heroes/');
    expect(response.status).toBe(404);
});
