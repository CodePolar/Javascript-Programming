/* Higher Order Functions */

function greaterThan(n) {
  return (m) => m > n;
}

greaterThan(20)(30);

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

reduce(
  data,
  (a, b) => {
    return a - b;
  },
  0
);

/* Object-Oriented-Programming */

// Maps

let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};

console.log('Is Boris age known?', 'Boris' in ages);

let names = new Map();

names.set('Boris', 'Good Man');
console.log(names.get(`Boris`));

// Polymorphism

let Rabbit = function (name, lastname) {
  this.name = name;
  this.lastname = lastname;
};

Rabbit.prototype.sayName = function () {
  return `Hello My name is ${this.name}`;
};

let polly = new Rabbit('Polly', 'Robbins');

console.log(polly.sayName());

//  Symbols

let sym = Symbol('name');

Rabbit.prototype[sym] = 30;
console.log(polly[sym]);

const toStringSymbol = Symbol('toString');

Array.prototype[toStringSymbol] = function () {
  return `${this.length} number of elements`;
};

console.log(data[toStringSymbol]());

// Iterator Interface

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return { done: true };
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

let matrix = new Matrix(3, 2, (x, y) => `value ${x},${y}`);
let i = 0;
for (let { x, y, value } of matrix) {
}

// class Test {
//   constructor(val1,val2, element = (x,y) => undefined){
//     this.val1 = val1;
//     this.val2 = val2;
//     this.content = [];
//    for (let y = 0; y < val2; y++) {
//       for (let x = 0; x < val1; x++) {
//         this.content[y * val1 + x] = element(x, y);
//       }
//     }
//   }
// }

// let test = new Test(1,2, (x,y) => `${x} and ${y}`);
// console.log(test);

let okIterator = 'OK'[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

for (let element of 'asd') {
  console.log(element);
}

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Post Office",
  "Daria's House-Ernie's House",
  "Ernie's House-Grete's House",
  "Grete's House-Shop",
  'Marketplace-Post Office',
  'Marketplace-Town Hall',
  'Marketplace-Shop',
  "Alice's House-Cabin",
  "Bob's House-Town Hall",
  "Daria's House-Town Hall",
  "Grete's House-Farm",
  'Marketplace-Farm',
  'Shop-Town Hall',
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);
