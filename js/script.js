$(function () {
  $("button#retrieve-data").on("click", function () {
    makeXHRCallForXML();
  });
});

function makeXHRCallForJSON() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/test.json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      let el = document.getElementById("content");
      let responseData = xhr.responseText;
      console.log(responseData);
      // need to add some way to parse the data, perhaps with DOMParser
    }
  };

  xhr.send();
}

function makeXHRCallForHTML() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/test.html");

  xhr.onload = function () {
    if (xhr.status === 200) {
      let el = document.getElementById("content");
      el.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
}

function makeXHRCallForXML() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/test.xml");

  xhr.onload = function () {
    if (xhr.status === 200) {
      let el = document.getElementById("content");
      let responseData = xhr.responseXML;
      console.log(responseData);
      // need to add some way to parse the data, perhaps with DOMParser
    }
  };

  xhr.send();
}
