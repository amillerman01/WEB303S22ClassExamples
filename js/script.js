$(function () {
  $("button#retrieve-data").on("click", function () {
    makeXHRCallForXML();
  });
});

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
    }
  };

  xhr.send();
}
