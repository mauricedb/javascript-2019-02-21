class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

class Calculator {
  constructor(private readonly logger: Logger | null) {}

  add(x: number, y: number) {
    const result = x + y;
    if (this.logger) {
      this.logger.log(`${x} + ${y} = ${result}`);
    }

    return result;
  }

  subtract(x: number, y: number) {
    const result = x - y;
    if (this.logger) {
      this.logger.log(`${x} - ${y} = ${result}`);
    }
    return result;
  }
}

const x = document.getElementById('x') as HTMLInputElement;
const y = document.getElementById('y') as HTMLInputElement;
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

// const calculator = new Calculator(new Logger());
const calculator = new Calculator(null);

if (add && result) {
  add.addEventListener('click', () => {
    result.textContent = calculator.add(+x.value, +y.value).toString();
  });
}

subtract!.addEventListener('click', () => {
  result!.textContent = calculator.subtract(+x.value, +y.value).toString();
});

class Dog {
  eat() {
    return 1;
  }
  bark() {}
}

interface Cat {
  eat(): string;
  sleep(): void | number;
}

type X = Cat | Dog;
type Y = Cat & Dog;

let c1: Cat;
let c2: X;
let c3: Y;

c3 = {
  bark() {},
  eat() {
    return 1 as any;
  },
  sleep() {
    return 1;
  }
};

c3.bark();

interface Katje {
  sleep(): number;
}

class Demo implements Y {
  sleep() {
    return 1;
  }
  eat() {
    return 1 as any;
  }
  bark() {}
}

const options = {
  x: 1,
  y: 2,
  text: 'Doe maar'
};

type Options = typeof options;

function doeIets(o: Options) {}

function doeNogIets(option: Partial<typeof defaultOptions>) {
  const defaultOptions = {
    x: 1,
    y: 2,
    text: 'Doe maar'
  };

  const actualOptopns = { ...defaultOptions, ...options };
}

doeNogIets({});

function test(param: boolean | 0 | 1 | '' | 'x') {
  if (param) {
  } else {
  }
}

test(1);
test(0);
test(true);
test(false);
test('x');
test('');
// test('y');

function getText(key: keyof typeof teksts) {
  const teksts = {
    yes: 'Ja',
    no: 'Nee',
    maybe: 'Misschien'
  };

  return teksts[key];
}

console.log(getText('yes'));
getText('no');
getText('maybe');

const url =
  'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

// function getData() {
//   fetch(url)
//     .then(rsp => rsp.json())
//     .then(data => console.table(data.value))
//     .catch(err => console.error(err));
// }

function sleep(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, ms);
  });
}

async function getData() {
  try {
    const rsp = await fetch(url);
    if (1) {
      const data = await rsp.json();
      if (data.value) {
        await sleep(5000);

        console.table(data.value);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

getData();
