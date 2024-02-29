
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('CalculateNumber', () => {
    it('expects the sum, divide, and subtract of two rounded numbers', () => {
        expect(calculateNumber("SUBTRACT", 13.62, 1.5)).to.equal(12);
        expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
        expect(calculateNumber("DIVIDE", 13.62, 1.5)).to.equal(9);
    });

    it('expects the sum, divide, and subtract of two rounded negative numbers', () => {
        expect(calculateNumber("SUM", -1.4, -2.5)).to.equal(-4);
        expect(calculateNumber("DIVIDE", -4, -2)).to.equal(2);
        expect(calculateNumber("SUBTRACT", -2.5, -0.5)).to.equal(-2);
    });

    it('expects the sum, divide, subtract of two rounded numbers, one negative and one positive', () => {
        expect(calculateNumber("SUM", 2.4, -2.5)).to.equal(0);
        expect(calculateNumber("SUBTRACT", 3, -2.67)).to.equal(6);
        expect(calculateNumber("DIVIDE", -8.4, -2)).to.equal(4);
    });

    it('expects that when we divide a number by 0 it raises an error', () => {
        expect(calculateNumber("DIVIDE", 10, 0)).to.equal("Error");
    });
});
