function calculateNumber(type, a, b) {
    if (type === "SUM") {
        return Math.round(a) + Math.round(b);
    } else if (type === "SUBTRACT") {
        return Math.round(a) - Math.round(b);
    } else if (type === "DIVIDE") {
        try {
            return Math.round(a) / Math.round(b);
        } catch(err) {
            return err;
        }
    }
}
module.exports = calculateNumber;
