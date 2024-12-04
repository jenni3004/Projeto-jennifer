test('Deve retornar veículos na resposta', async () => {
    const response = await request(baseUrl).get('/vehicles/');
    expect(response.status).toBe(200);
    expect(response.body.count).toBeGreaterThan(0);
});
