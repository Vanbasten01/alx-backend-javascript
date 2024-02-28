const assert = require('assert');
const calculateNumber = require('./0-calcul');




describe('CalculateNumber', () => {
    it('assert the sum of two rounded numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 2.5), 4);
    });
    it('assert the sum of two rounded negative Numbers', () => {
        assert.strictEqual(calculateNumber(-1.4, -2.5), -3)
    });
    it('assert the sum of two rounded negative Numbers, one negative and one positive', () => {
        assert.strictEqual(calculateNumber(2.4, -2.5), 0)
    })
})