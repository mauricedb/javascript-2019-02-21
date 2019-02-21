'use strict';

var fn = function(x, y, z) {
  console.log('x + y', x + y);
};

console.log('fn.length', fn.length);

fn(1, 2, 3, 4);
fn.apply(null, [3, 4]);

// fn.bla = 42;

// console.log(fn.bla);

var xx = true;

// xx.bla = 12;

console.log('xx.bla', xx.bla);

function Mammal() {}

Mammal.prototype.sleep = function() {
  console.log('I am sleeping');
};

function Person(name) {
  this.name = name;

  //   this.sayHello = function() {
  //     console.log('Hallo ', this.name);
  //   };
}

Person.prototype = new Mammal();

Person.prototype.sayHello = function() {
  console.log('Hallo ', this.name);
};

var me = new Person('Jack');

console.log(me);

me.sayHello();

me.sleep();

var it = new Person('IT');

// delete Person.prototype.sayHello

Person.prototype.eat = function() {
  console.log(this.name + ' is eating');
};

it.sayHello();

it.eat();
me.eat();

me.eat = function() {
  console.log('I am not hungry');
};

it.eat();
me.eat();

// delete me.eat

// it.eat();
// me.eat();

me.sayHello();

var fn = me.sayHello;

var o = {
  fn: fn,
  name: 'Piet'
};
o.fn();

// document.getElementById('hello').addEventListener('click', function() {
//   me.sayHello();
// });

function addStuff(x, y) {
  console.log(this + x + y);
}

addStuff(1, 2);
addStuff.call(1, 2, 3);

document.getElementById('hello').addEventListener('click', me.sayHello);

var handler = me.sayHello;
handler.call(document.getElementById('hello'));

//   document
//   .getElementById('hello')
//   .addEventListener('click', me.sayHello.bind({ name: 'Pietje' }));

var data = [{ x: 1 }, { x: 5, z:5 }];

console.table(data);
