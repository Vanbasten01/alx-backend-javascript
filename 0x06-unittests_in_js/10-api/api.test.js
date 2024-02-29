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

    
    it('test the response status passing a number ', (done) => {
        request.get('http://localhost:7865/cart/34', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    });

    
    it('test the response status by passing not a number', (done) => {
        request.get('http://localhost:7865/cart/hello', (error, response, body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        })
    });

    it('tests the return value', (done) => {
        request.get('http://localhost:7865/cart/23', (error, response, body) => {
            expect(response.body).to.equal("Payment methods for cart 23");
            done();
        })
    });

    it('test the response status of requesting /available_payments ', (done) => {
        request.get('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    });

    it('test the response of requesting /available_payments ', (done) => {
        request.get('http://localhost:7865/available_payments', (error, response, body) => {
            expectedBody = JSON.parse(body)
            expect(expectedBody).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
            done();
        })
    });

    it('test the response of a post req tp the route /login', (done) => {
        const requestData = { "userName": "Betty" }
        request.post('http://localhost:7865/login', { json: requestData }, (error, response, body) => {
            expect(response.body).to.equal("Welcome Betty");
            done();
        })
    });





    
})