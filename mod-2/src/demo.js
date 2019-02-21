import { printMessage } from './utils.js';

printMessage('Hallo');

function scoping() {
  //   console.log(x);
  //   let x = 1;
  const x = { value: 1 };
  //   Object.freeze(x);
  console.log(x);
  //   x = 'demo 2';
  x.value = 2;
  console.log(x);
}

scoping();

class Animal {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  eat() {
    console.log(this.name + ' is eating');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  eat() {
    super.eat();
    console.log(this.name + ' slapen');
  }
}

const dog = {
  attack: function() {
    console.log(this.name + ' is attacking');
  }
};

const zorro = new Cat('Zorro');
zorro.eat();

for (const key in dog) {
  zorro[key] = dog[key];
}

// zorro.name = 'garfield';
zorro.attack();

const prop = 'firstName';
// const person = {};
// person[prop] = 'Maurice';

const person = { [prop]: 'Maurice' };
console.log(person);

console.log({ [prop]: 'Jack' });

const people = [
  { firstName: 'Mieke' },
  { firstName: 'Piet' },
  { firstName: 'jan' }
];

const [{ firstName: p0 }, { firstName: p1 }, { firstName: p2 }] = people;

console.log(p0, p1, p2);

function print({ name, merk }) {
  console.log('name || merk', name || merk || '????');

  name && console.log(name);
  merk && console.log(merk);

  console.log(
    "merk === undefined ? '?' : merk",
    merk === undefined ? '?' : merk
  );
  //   if (name) console.log(name);
  //   if (merk) console.log(merk);
}

print(zorro);
print(1);
print({ merk: 'mazda' });

const source = [1, 2, 3, 4, 5, 1, 2];

const set = source.reduce((p, c) => {
  p.add(c);
  return p;
}, new Set());

console.table(Array.from(set));

function add() {
  console.table(Array.from(arguments));
}

add(1, 2, 3);

const url = 'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]';

// function getJokes() {
//   fetch(url)
//     .then(rsp => rsp.json())
//     .then(data => console.table(data.value))
//     .catch(err => console.error(err));
// }

// getJokes();

async function getJokes() {
  try {
    const rsp = await fetch(url);
    if (rsp.ok) {
      const data = await rsp.json();
      console.table(data.value);
    }
  } catch (err) {
    console.error(err);
  }
}

getJokes();
