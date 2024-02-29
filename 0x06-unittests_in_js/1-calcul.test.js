const assert = require('assert');
const calculateNumber = require('./1-calcul');




describe('CalculateNumber', () => {
    it('assert the sum , divide, subtract of two rounded numbers', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 13.62, 1.5), 12)
        assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
        assert.strictEqual(calculateNumber("DIVIDE", 13.62, 1.5), 7)
    });
    it('assert the sum, divide, subtract of two rounded negative Numbers', () => {
        assert.strictEqual(calculateNumber("SUM", -1.4, -2.5), -3);
        assert.strictEqual(calculateNumber("DIVIDE", -4, -2), 2);
        assert.strictEqual(calculateNumber("SUBTRACT", -2.5, -0.5), -2);

    });
    it('assert the sum, divide, subtract of two rounded negative Numbers, one negative and one positive', () => {
        assert.strictEqual(calculateNumber("SUM", 2.4, -2.5), 0);
        assert.strictEqual(calculateNumber("SUBTRACT", 3, -2.67), 6);
        assert.strictEqual(calculateNumber("DIVIDE", -8.4, -2), 4);
    })
    it('assert that when we dividea number by 0 it raises an err', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 10, 0), "Error")
    });
})