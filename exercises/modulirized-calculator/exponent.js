function Exponent(num1, num2) {
    this.exp = function (num1, num2) {
        var total = Math.pow(num1, num2);
        return total;
    }
}

module.exports = new Exponent();