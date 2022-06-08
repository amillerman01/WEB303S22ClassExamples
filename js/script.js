function greetUser() {
  return "Hello " + getName();
}
function getName() {
  var name = "Molly";
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

function getArrayValue(index) {
  var myArray = [0, 1, 6];
  console.info("Array contains: ", myArray);
  if (index > myArray.length) {
    console.warn(
      "Index was larger than array size. Max value for index should be: ",
      myArray.length - 1
    );
    return;
  }
  console.log("Array value at index", index, " is: ", myArray[index]);
}

var greeting = greetUser();
console.log(greeting);

getArrayValue(2);

getArrayValue(200);

// $(function () {
//   $("button#retrieve-data").on("click", function () {});
// });
