const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with correct arguments  and log the total', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleLogStub = sinon.stub(console, 'log'); // Stub console.log

        sendPaymentRequestToApi(100, 20);
        
        // Assertions
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleLogStub.calledWith('The total is: 10')).to.be.true;

        // Restore stubs
        calculateNumberStub.restore();
        consoleLogStub.restore();
    });
});
