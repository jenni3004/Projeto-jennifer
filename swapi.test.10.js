test('Deve retornar os dados da espécie Wookiee', async () => {
    const response = await request(baseUrl).get('/species/3/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Wookie');
    expect(response.body.language).toBe('Shyriiwook');
});
