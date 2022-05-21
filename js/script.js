$(function () {
  $("button#retrieve-data").on("click", function () {
    makeXHRCallForJSON();
  });
});

function makeXHRCallForJSON() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data/test.json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      let el = document.getElementById("content");
      let responseDataJSON = xhr.responseText;
      console.log("This is the JSON response: ", responseDataJSON);
      let responseDataObject = JSON.parse(responseDataJSON);
      console.log("This is the Object version: ", responseDataObject);
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
