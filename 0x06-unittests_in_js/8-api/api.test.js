const { expect } = require("chai")
const request = require('request');

describe('index get', () => {
    it('tests the status 200', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

    it('tests the return value', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.body).to.equal("Welcome to the payment system");
            done();
        })
    });

    it('test response json with content type', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.headers['content-type']).to.include("text/html");
            done();
        })
    });
})