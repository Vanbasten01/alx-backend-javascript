const assert = require('assert');
const calculateNumber = require('./0-calcul');




describe('CalculateNumber', () => {
    it('assert the sum of two rounded numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 2.5), 4);
        assert.strictEqual(calculateNumber(12.62, 0.4), 13)
    });
    it('assert the sum of two rounded negative Numbers', () => {
        assert.strictEqual(calculateNumber(-1.4, -2.5), -3);
        assert.strictEqual(calculateNumber(-1.6, -2.5), -4)
    });
    it('assert the sum of two rounded negative Numbers, one negative and one positive', () => {
        assert.strictEqual(calculateNumber(2.4, -2.5), 0);
        assert.strictEqual(calculateNumber(3, -2.67), 0);
    })
})