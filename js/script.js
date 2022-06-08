function greetUser() {
  return "Hello " + getName();
}
function getName() {
  var name = "Molly";
  var myArray = [0, 1, 6];
  console.log(
    "Array value at index 100 is: ",
    myArray[100],
    " and the entire array contains: ",
    myArray
  );
  var myObject = {
    name: {
      firstLetter: "A",
      value: "Alex",
    },
  };
  console.log("My object forced to be a string contains: " + myObject);
  console.log("My object contains: ", myObject);
  // console.log(myObject.name.firstLetter);
  var number = 10 + parseInt(name);
  console.log("Tried to add 10 to name. Resulted in: ", name);
  return name;
}

var greeting = greetUser();
console.log(greeting);

// $(function () {
//   $("button#retrieve-data").on("click", function () {});
// });
