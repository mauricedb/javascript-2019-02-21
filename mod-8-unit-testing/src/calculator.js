// import Logger from './logger';
const Logger = require('./logger');

module.exports = class Calculator {
  constructor() {
    this.logger = new Logger();
  }

  add(x, y) {
    const result = x + y;
    
    this.logger.log(`${x} + ${y} = ${result}`);

    return result;
  }

  subtract(x, y) {
    const result = x - y;

    this.logger.log(`${x} - ${y} = ${result}`);

    return result;
  }
}
