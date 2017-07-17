

// Dog Constructor & Prototype
function Dog (name, color, status, hungry) {
  'use strict';
    this.name = name;
    this.color = color;
    this.status = status;
    this.hungry = hungry;
}

let sadie = new Dog("Sadie", "black", "normal", false)

let moonshine = new Dog("Moonshine", "black", "normal", true)

let atticus = new Dog("Atticus")

// Instances of Dog
// Needed: sadie, moonshine, atticus

// Human Constructor & Prototype
function Human (cool) {
  'use strict';
  this.cool = cool;
    this.pet = function(dog){
      dog.status = "happy"
    };
    this.owner = function(dog){
      sadie.owner = "mason";
    }
    this.feed = function(dog){
      moonshine.hungry = false;
    }

}
//--Define Humans

let mason = new Human(false)

let julia = new Human(true)

// Instances of Human
// Needed: mason, julia
