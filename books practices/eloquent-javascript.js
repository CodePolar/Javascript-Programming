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

reduce(data,(a,b) => {
  return a - b;
},0);

/* Object-Oriented-Programming */

// Maps

let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62
}

console.log("Is Boris age known?", "Boris" in ages);

let names = new Map();

names.set("Boris", "Good Man");
console.log(names.get(`Boris`));

// Polymorphism

let Rabbit = function(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

Rabbit.prototype.sayName = function() {
  return `Hello My name is ${this.name}`;
}

let polly = new Rabbit("Polly", "Robbins");

console.log(polly.sayName());

//  Symbols













