import * as jquery from 'jquery';

class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

class Calculator {
  // logger: Logger;

  // constructor(logger: Logger) {
  //   this.logger = logger;
  // }

  constructor(private readonly logger: Logger) {}

  add(x: number, y: number): number {
    this.logger.log('add');

    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
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

interface ICat {
  name: string;
}

class Cat {
  age: number;

  constructor(public name: string) {}
}

function sleep({ name }: Cat) {
  console.log(name + ' slaapt');
}

const zorro = new Cat('Zorro');
sleep(zorro);

sleep({ name: 'Ook een kat', age: 8 });

function eat(cat: ICat) {
  console.log(cat.name + ' eet');
}

eat(new Cat('Zorro'));

const c = { name: 'Ook een kat', bla: true };
eat(c);

function fight(cat: { name: string }) {
  console.log(cat.name + ' vecht');
}

fight(zorro);
// fight(null);

const dog = {
  name: 'Plutto',
  owner: 'Mickey'
};

type Dog = typeof dog;

type BijnaHond = Partial<Dog>;

// jquery.ajax({
//   url: '',
//   headers: {}
// });
