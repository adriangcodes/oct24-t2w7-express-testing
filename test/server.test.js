const {app} = require('../src/server.js')
const request = require('supertest')

describe('Make sure the server boots up properly', () => {
    test('Hello world route responds with the status code 200 and a nice message', async () => {
        let response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Hello, world!')
    })
})