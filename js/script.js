function greetUser() {
  return "Hello " + getName();
}
function getName() {
  var name = "Molly";
  var myArray = [0, 1, 6];
  console.log(myArray[100]);
  var myObject = {
    // name: {
    //   firstLetter: "A",
    //   value: "Alex",
    // },
  };
  console.log(myObject.name.firstLetter);
  var number = 10 + parseInt(name);
  console.log(number);
  return name;
}

var greeting = greetUser();
console.log(greeting);

// $(function () {
//   $("button#retrieve-data").on("click", function () {});
// });
