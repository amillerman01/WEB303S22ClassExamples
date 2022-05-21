$(function () {
  // code will go here
});

var xhr = new XMLHttpRequest();
xhr.open("GET", "test.json");
xhr.send("search=city");

xhr.onload = function () {
  if (xhr.status === 200) {
    // process response
  }
};
