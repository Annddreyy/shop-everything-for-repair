import request from 'supertest';
import { app } from '../../app';

describe('/news_cards', () => {
    // beforeAll(async () => {
    //     await request(app).delete('/__test__/news_cards/data')
    // })
    it('should return 200 and news cards array', async () => {
        await request(app).get('/news_cards').expect(200);
    });
});
