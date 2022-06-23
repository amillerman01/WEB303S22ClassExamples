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

// class Animal {
//   // type; // property belonging to the class
//   constructor(t) {
//     this.type = t;
//   }

//   toString() {
//     return `This animal is a ${this.type}`;
//   }
// }

// let rabbit = new Animal("Rabbit");
// let rabbitString = `The animal says: ${rabbit}`;
// // note: console.log doesn't invoke toString
// console.log(rabbit);
// console.log(rabbitString);

// fifth example of object lecture

class Temperature {
  constructor(c, h) {
    this.celsius = c;
    this.humidity = h;
  }
  // public decimal Fahrenheit { get; set; } = 3.1415;

  get fahrenheit() {
    return (this.celsius * 1.8 + 32).toFixed(2);
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  toString() {
    return `The temperature is ${this.celsius.toFixed(
      2
    )}°C and the humidity is ${this.humidity}%`;
  }
}

let temp = new Temperature(37, 50);
console.log(temp.fahrenheit);
temp.fahrenheit = 72;
console.log(temp.fahrenheit);
console.log(temp + "");
// temp.celsius = 18;
// console.log(temp.fahrenheit);

console.log("celsius" in temp);
console.log("fahrenheit" in temp);
console.log("toString" in temp);
console.log("humid" in temp);
console.log("humidity" in temp);

if ("celsius" in temp) {
  // safe to use celsius property
  console.log(temp.celsius);
}

if ("humidity" in temp) {
  // safe to use celsius property
  // console.log("Humidity is: ", temp.humidity);
  //  this is the same as the line above, just different syntax
  console.log("Humidity is: ", temp["humidity"]);
}

// I'm expecting celsius, humidity, maybe fahrenheit
for (const property in temp) {
  console.log(`Property name: ${property}`);

  // we can't do this, this would try to find the property variable in the temp variable (which is an instance of the Temperature class)
  // console.log(`Property value: ${temp.property}`);

  // this looks for each individual property inside of temp (which is an instance of the Temperature class)
  console.log(`Property value: ${temp[property]}`);
}

// for in does not return getters and setters as if they were properties, unlike the in check before!
