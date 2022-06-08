function greetUser() {
  return "Hello " + getName();
}
function getName() {
  var name = "Molly";
  return name;
}

var greeting = greetUser();
console.log(greeting);

// $(function () {
//   $("button#retrieve-data").on("click", function () {});
// });
