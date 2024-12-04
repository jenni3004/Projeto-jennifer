test('Retorna os dados do filme A New Hope', async () => {
    const response = await request(baseUrl).get('/films/1/');
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('A New Hope');
    expect(response.body.episode_id).toBe(4);
});
