class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

class Calculator {
  constructor(private readonly logger: Logger) {}

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

const x = document.getElementById('x') as HTMLInputElement;
const y = document.getElementById('y') as HTMLInputElement;
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

const calculator = new Calculator(new Logger());

add.addEventListener('click', () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener('click', () => {
  result.textContent = calculator.subtract(+x.value, +y.value).toString();
});
