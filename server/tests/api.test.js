/**
 * @jest-environment node
 */

const request = require('supertest');
const app = require('../app');

describe('/api', () => {
	describe('GET /', () => {
		it('should return 200 res and json', async () => {
			const res = await request(app).get('/api');
			expect(res.status).toBe(200);
			expect(res.body).toStrictEqual({ msg: 'welcome to the api' });
		});
	});
});
