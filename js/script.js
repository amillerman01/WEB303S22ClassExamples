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

var color = "rainbow";

const speak = (line) => {
  console.log(`The ${this.color} rabbit says "${line}"`);
};

let rabbit = {
  color: "white",
  speak: speak,
};

rabbit.speak("I'm late and a different colour!");
