var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (msg) {
        console.log(msg);
    };
    return Logger;
}());
var Calculator = /** @class */ (function () {
    function Calculator(logger) {
        this.logger = logger;
    }
    Calculator.prototype.add = function (x, y) {
        var result = x + y;
        this.logger.log(x + " + " + y + " = " + result);
        return result;
    };
    Calculator.prototype.subtract = function (x, y) {
        var result = x - y;
        this.logger.log(x + " - " + y + " = " + result);
        return result;
    };
    return Calculator;
}());
var x = document.getElementById('x');
var y = document.getElementById('y');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var result = document.getElementById('result');
var calculator = new Calculator(new Logger());
add.addEventListener('click', function () {
    result.textContent = calculator.add(+x.value, +y.value).toString();
});
subtract.addEventListener('click', function () {
    result.textContent = calculator.subtract(+x.value, +y.value).toString();
});
