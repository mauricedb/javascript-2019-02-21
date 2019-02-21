'use strict';

// console.log("false == 'false'", false == 'false');

// console.log("+false == +'false'", +false == +'false');
// console.log("+'false'", +'false');
// console.log('+false', +false);

function x() {
  return {
    x: 11
  };
}

console.log('x()', x());

function y() {
  //   o = 1;
}

y();
// console.log(o);

console.log('[] + []', [] + []);
console.log('[1] + [2]', [1] + [2]);
console.log('[{x:1}] + [{y:2}]', [{ x: 1 }] + [{ y: 2 }]);
console.log('[] - []', [] - []);
