test('Retorna os dados da Millennium Falcon', async () => {
    const response = await request(baseUrl).get('/starships/10/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Millennium Falcon');
    expect(response.body.model).toBe('YT-1300 light freighter');
});
