function greetUser() {
  return "Hello " + getName();
}
function getName() {
  var name = "Molly";
  return name;
}

function getArrayValue(index) {
  var myArray = [0, 1, 6];
  console.info("Array contains: ", myArray);
  // add a message to the console when index is NOT equal to 1
  console.assert(
    index === 1, // if condition is true, no console assert message will be added
    "You're trying to access the second index value!"
  );
  if (index != 1) {
    debugger;
  }
  if (index > myArray.length) {
    console.warn(
      "Index was larger than array size. Max value for index should be: ",
      myArray.length - 1
    );
    return;
  }
  console.log("Array value at index", index, " is: ", myArray[index]);
}

function convertToNumber(valueToConvert) {
  if (isNaN(valueToConvert)) {
    console.error("The value provided is not a number! ", valueToConvert);
    return -1;
  }

  return parseInt(valueToConvert);
}

function objectOperation() {
  var myObject = {
    // name: {
    //   firstLetter: "A",
    //   value: "Alex",
    // },
  };
  console.log("My object forced to be a string contains: " + myObject);
  console.log("My object contains: ", myObject);
  console.table(myObject);
  console.log(myObject.name.firstLetter);
}

// var greeting = greetUser();
// console.log(greeting);

// getArrayValue(0);
// getArrayValue(1);
// getArrayValue(2);

// getArrayValue(200);

// console.log(10 + convertToNumber("three hundred"));

var busy = false;

try {
  busy = true; // show the fancy spinning loader while we run objectOperation
  objectOperation();
  // any code below this will not run if objectOperation throws an exception
  // busy = false; // hide the spinning loader afterwards
} catch (e) {
  console.error(e);
  // busy = false; // hide the spinning loader afterwards
} finally {
  // we reset busy here, so we can write it once, keep our code DRY, and make sure it's always done
  busy = false; // hide the spinning loader afterwards
}

// $(function () {
//   $("button#retrieve-data").on("click", function () {});
// });
