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
      // responseDataJSON.location // can't do this
      let responseDataObject = JSON.parse(responseDataJSON);
      console.log("This is the Object version: ", responseDataObject);
      console.log("Location value: ", responseDataObject.location);
      //   el.innerHTML = "<div>" + responseDataObject.location + "</div>";
      el.innerHTML = `<div>${responseDataObject.location}</div>
                      <div>${responseDataObject.date}</div>
                      <div><img src="${responseDataObject.map}"></div>`;
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
