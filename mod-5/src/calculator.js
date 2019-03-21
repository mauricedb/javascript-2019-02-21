"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        if (this.logger) {
            this.logger.log(x + " + " + y + " = " + result);
        }
        return result;
    };
    Calculator.prototype.subtract = function (x, y) {
        var result = x - y;
        if (this.logger) {
            this.logger.log(x + " - " + y + " = " + result);
        }
        return result;
    };
    return Calculator;
}());
var x = document.getElementById('x');
var y = document.getElementById('y');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var result = document.getElementById('result');
// const calculator = new Calculator(new Logger());
var calculator = new Calculator(null);
if (add && result) {
    add.addEventListener('click', function () {
        result.textContent = calculator.add(+x.value, +y.value).toString();
    });
}
subtract.addEventListener('click', function () {
    result.textContent = calculator.subtract(+x.value, +y.value).toString();
});
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.eat = function () {
        return 1;
    };
    Dog.prototype.bark = function () { };
    return Dog;
}());
var c1;
var c2;
var c3;
c3 = {
    bark: function () { },
    eat: function () {
        return 1;
    },
    sleep: function () {
        return 1;
    }
};
c3.bark();
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.sleep = function () {
        return 1;
    };
    Demo.prototype.eat = function () {
        return 1;
    };
    Demo.prototype.bark = function () { };
    return Demo;
}());
var options = {
    x: 1,
    y: 2,
    text: 'Doe maar'
};
function doeIets(o) { }
function doeNogIets(option) {
    var defaultOptions = {
        x: 1,
        y: 2,
        text: 'Doe maar'
    };
    var actualOptopns = __assign({}, defaultOptions, options);
}
doeNogIets({});
function test(param) {
    if (param) {
    }
    else {
    }
}
test(1);
test(0);
test(true);
test(false);
test('x');
test('');
// test('y');
function getText(key) {
    var teksts = {
        yes: 'Ja',
        no: 'Nee',
        maybe: 'Misschien'
    };
    return teksts[key];
}
console.log(getText('yes'));
getText('no');
getText('maybe');
var url = 'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';
// function getData() {
//   fetch(url)
//     .then(rsp => rsp.json())
//     .then(data => console.table(data.value))
//     .catch(err => console.error(err));
// }
function sleep(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(reject, ms);
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var rsp, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    rsp = _a.sent();
                    if (!1) return [3 /*break*/, 4];
                    return [4 /*yield*/, rsp.json()];
                case 2:
                    data = _a.sent();
                    if (!data.value) return [3 /*break*/, 4];
                    return [4 /*yield*/, sleep(5000)];
                case 3:
                    _a.sent();
                    console.table(data.value);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
getData();
