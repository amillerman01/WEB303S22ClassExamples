$(function () {
  $("button#retrieve-data").on("click", function () {
    //   var busy = true;
    $.get("data/test.html")
      .done(function (htmlDataFromFile, statusText, jqXHRObject) {
        console.log(
          "The data that came back from test.html: ",
          htmlDataFromFile
        );
        console.log(
          "The status text that came back from test.html: ",
          statusText
        );
        console.log(
          "The jqXHR object that came back from test.html: ",
          jqXHRObject
        );
      })
      .fail(function (jqXHRObject, statusText, errorThrownValue) {
        console.log(
          "The jqXHRObject that came back from test.html: ",
          jqXHRObject
        );
        console.log(
          "The status text that came back from test.html: ",
          statusText
        );
        console.log(
          "The error thrown that came back from test.html: ",
          errorThrownValue
        );
      })
      .always(function () {
        //   busy = false;
      });
    $.get("data/testing.html")
      .done(function (htmlDataFromFile, statusText, jqXHRObject) {
        console.log(
          "The data that came back from testing.html: ",
          htmlDataFromFile
        );
        console.log(
          "The status text that came back from testing.html: ",
          statusText
        );
        console.log(
          "The jqXHR object that came back from testing.html: ",
          jqXHRObject
        );
      })
      .fail(function (jqXHRObject, statusText, errorThrownValue) {
        console.log(
          "The jqXHRObject that came back from testing.html: ",
          jqXHRObject
        );
        console.log(
          "The status text that came back from testing.html: ",
          statusText
        );
        console.log(
          "The error thrown that came back from testing.html: ",
          errorThrownValue
        );
      })
      .always(function () {
        //   busy = false;
      });
  });
});

// function makeXHRCallForJSON() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "data/test.json");

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       let el = document.getElementById("content");
//       let responseDataJSON = xhr.responseText;
//       console.log("This is the JSON response: ", responseDataJSON);
//       // responseDataJSON.location // can't do this
//       let responseDataObject = JSON.parse(responseDataJSON);
//       console.log("This is the Object version: ", responseDataObject);
//       console.log("Location value: ", responseDataObject.location);
//       /* the data looks something like this

//         responseDataObject = {
//             location: "New York",
//             date: "may 30",
//             map: "img/newyork.png"
//         }
//       */
//       //   el.innerHTML = "<div>" + responseDataObject.location + "</div>";
//       el.innerHTML = `<div>${responseDataObject.location}</div>
//                       <div>${responseDataObject.date}</div>
//                       <div><img src="${responseDataObject.map}"></div>`;

//       let responseDataTurnedBackToJSON = JSON.stringify(responseDataObject);
//       // need to add some way to parse the data, perhaps with DOMParser
//     }
//   };

//   xhr.send();
// }

// function makeXHRCallForJSONSecondTest() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "data/test2.json");

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       let el = document.getElementById("content");
//       let responseDataJSON = xhr.responseText;
//       console.log("This is the JSON response: ", responseDataJSON);
//       // responseDataJSON.location // can't do this
//       let responseDataObject = JSON.parse(responseDataJSON);
//       console.log("This is the Object version: ", responseDataObject);
//       /* the data looks something like this

//         responseDataObject = [
//             {
//                 location: "Austin, TX",
//                 date: "may 15",
//                 map: "img/austin.png"
//             },
//             {
//                 location: "New York",
//                 date: "may 30",
//                 map: "img/newyork.png"
//             }
//         ]
//       */
//       // need to loop over responseDataObject.events, and then process each object

//       //   el.innerHTML = `<div>${responseDataObject.location}</div>
//       //                   <div>${responseDataObject.date}</div>
//       //                   <div><img src="${responseDataObject.map}"></div>`;

//       let responseDataTurnedBackToJSON = JSON.stringify(responseDataObject);
//       // need to add some way to parse the data, perhaps with DOMParser
//     }
//   };

//   xhr.send();
// }

// function makeXHRCallForHTML() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "data/test.html");

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       let el = document.getElementById("content");
//       el.innerHTML = xhr.responseText;
//     }
//   };

//   xhr.send();
// }

// function makeXHRCallForXML() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "data/test.xml");

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       let el = document.getElementById("content");
//       let responseData = xhr.responseXML;
//       console.log(responseData);
//       // need to add some way to parse the data, perhaps with DOMParser
//     }
//   };

//   xhr.send();
// }
