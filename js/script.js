// $(function () {
//   $("button#retrieve-data").on("click", function () {});
// });

// first example of object lecture

// let whiteRabbit = {};
// whiteRabbit.color = "white";

// // let whiteRabbit = {
// //   color: "white"
// // };

// whiteRabbit.speak = function (line) {
//   console.log(`The ${this.color} rabbit says "${line}"`);
// };

// whiteRabbit.speak("I'm late!");

// // without using the object, we can do something similar like this

// var color = "grey";
// function speak(line) {
//   console.log(`The ${color} rabbit says "${line}"`);
// }
// speak("I'm less late");

// second example of object lecture

// this makes sure out speak method doesn’t output undefined

// var color = "rainbow";

// const speak = (line) => {
//   console.log(`The ${this.color} rabbit says "${line}"`);
// };

// let rabbit = {
//   color: "white",
//   speak: speak,
// };

// let greyRabbit = {
//   color: "grey",
//   speak: speak,
// };

// rabbit.speak("I'm late and a different colour!");
// greyRabbit.speak("I'm not in Alice in Wonderland");

// third example of object lecture

// function Animal(t) {
//   this.type = t;
// }

// Animal.prototype.toString = function animalToString() {
//   // return `This animal is a ${this.type}`;
//   return "This animal is a " + this.type;
// };

// let fluffyRabbit = new Animal("Rabbit");

// let hungryWolf = new Animal("Wolf");

// let loudElephant = new Animal("Elephant");

// console.log("The first variable: " + fluffyRabbit);
// console.log(`The second variable: ${hungryWolf}`);
// console.log("The third variable:", loudElephant.toString());

// fourth example of object lecture

class Animal {
  // type; // property belonging to the class
  constructor(t) {
    this.type = t;
  }

  toString() {
    return `This animal is a ${this.type}`;
  }
}

let rabbit = new Animal("Rabbit");
let rabbitString = `The animal says: ${rabbit}`;
// note: console.log doesn't invoke toString
console.log(rabbit);
console.log(rabbitString);
