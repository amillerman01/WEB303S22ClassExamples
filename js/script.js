$(function () {
  $("button#retrieve-data").on("click", function () {
    makeXHRCall();
  });
});

function makeXHRCall() {
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
