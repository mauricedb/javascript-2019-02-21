import Logger from './logger';

export default class Calculator {
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
