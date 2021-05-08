/* Defining A Constructor Function */

// Constructor are defined with a capitalized name
// Constructors use the keyword =this= to set properties of the object they will create

function Dog() {
  this.name = "Spot";
  this.color = "White";
}

Dog.prototype = {
  // Only change code below this line
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log(`My Name Is ${this.name}`);
  },
}; // Prototype properties are in all instances of a constructor

var myPet = new Dog();

function DogTwo(name, color) {
  this.name = name; // own properties
  this.color = color;
}

DogTwo.prototype.numLegs = 4; // prototype properties

var terrier = new DogTwo("Payaso Asesino", "Yellow");

// console.log(terrier.name,`Is my dog, and he has ${terrier.numLegs} Legs.`);

/* instanceof for verify a instance of a constructor
 */
// console.log(terrier instanceof DogTwo);

var ownProps = [];
var prototypeProps = [];

for (var property in terrier) {
  if (terrier.hasOwnProperty(property)) {
    // Verify Props In Object
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// console.log(ownProps);
// console.log(prototypeProps);

/* The Constructor Property */
// Check If Is Type Is Dog

function joinDogFraternity(candidate) {
  return candidate.constructor == Dog ? true : false;
}

/* Using isPrototypeOf to check a prototype */

DogTwo.prototype.isPrototypeOf(terrier);

Object.prototype.isPrototypeOf(Dog.prototype); // Superior prototype chain <Object.prototype>

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

var grizz = new Bear("Grizzy");
grizz = Object.create(Animal.prototype);

grizz.eat();

function Animal() { } // Supertype Constructor Property
function Bird() { } // Type Constructor Property
function Dog() { }// Type Constructor Property


Bird.prototype = Object.create(Animal.prototype); // Type's Prototype as a subtype of Supertype animal
Dog.prototype = Object.create(Animal.prototype); // Type's Prototype as a subtype of Supertype animal
Bird.prototype.constructor = Bird; // To Show That They Were Constructed Bird and not Animal Constructor
Dog.prototype.constructor = Dog;

var duck = new Bird();
var beagle = new Dog();

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
  console.log("Woof!");
}
Dog.prototype.constructor = Dog;


var beagle = new Dog();

/* Mixins */

var flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, woooosh!");
  }
}

var bird = {
  name: "Donald",
  numLegs: 2
};

var plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird); // Adding the fly method throught a mixin
bird.fly(); // Using it

/* Closure to protect properties */

function Bird() {
  let weight = 15; // This property can't be changed in any part of code, only in this function

  this.getWeight = function() { // priviliged function that acceded to weight property
    return weight;
  }

}

/* Immediately Invoked Function Expression (IIFE) */

(function () {
  console.log("Chirp, chirp!");
})();

(function () { // No name, no invoke
  console.log("A cozy nest is ready");
})();

/* Use an IIFE to Create a Module */

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();