"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (msg) {
        console.log(msg);
    };
    return Logger;
}());
var Calculator = /** @class */ (function () {
    // logger: Logger;
    // constructor(logger: Logger) {
    //   this.logger = logger;
    // }
    function Calculator(logger) {
        this.logger = logger;
    }
    Calculator.prototype.add = function (x, y) {
        this.logger.log('add');
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
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
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    return Cat;
}());
function sleep(_a) {
    var name = _a.name;
    console.log(name + ' slaapt');
}
var zorro = new Cat('Zorro');
sleep(zorro);
sleep({ name: 'Ook een kat', age: 8 });
function eat(cat) {
    console.log(cat.name + ' eet');
}
eat(new Cat('Zorro'));
var c = { name: 'Ook een kat', bla: true };
eat(c);
function fight(cat) {
    console.log(cat.name + ' vecht');
}
fight(zorro);
// fight(null);
var dog = {
    name: 'Plutto',
    owner: 'Mickey'
};
// jquery.ajax({
//   url: '',
//   headers: {}
// });
