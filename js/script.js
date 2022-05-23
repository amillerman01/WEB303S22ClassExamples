$(function () {
  $("button#retrieve-data").on("click", function () {
    //   var busy = true;

    // this request comes back with good data
    // $.get("data/test.html")
    //   .done(function (htmlDataFromFile, statusText, jqXHRObject) {
    //     console.log(
    //       "The data that came back from test.html: ",
    //       htmlDataFromFile
    //     );
    //     console.log(
    //       "The status text that came back from test.html: ",
    //       statusText
    //     );
    //     console.log(
    //       "The jqXHR object that came back from test.html: ",
    //       jqXHRObject
    //     );
    //     $("#content-wrapper").html(htmlDataFromFile);
    //   })
    //   .fail(function (jqXHRObject, statusText, errorThrownValue) {
    //     console.log(
    //       "The jqXHRObject that came back from test.html: ",
    //       jqXHRObject
    //     );
    //     console.log(
    //       "The status text that came back from test.html: ",
    //       statusText
    //     );
    //     console.log(
    //       "The error thrown that came back from test.html: ",
    //       errorThrownValue
    //     );
    //   })
    //   .always(function () {
    //     //   busy = false;
    //   });

    // this request will fail
    // $.get("data/testing.html")
    //   .done(function (htmlDataFromFile, statusText, jqXHRObject) {
    //     console.log(
    //       "The data that came back from testing.html: ",
    //       htmlDataFromFile
    //     );
    //     console.log(
    //       "The status text that came back from testing.html: ",
    //       statusText
    //     );
    //     console.log(
    //       "The jqXHR object that came back from testing.html: ",
    //       jqXHRObject
    //     );
    //     $("#content-wrapper").html(htmlDataFromFile);
    //   })
    //   .fail(function (jqXHRObject, statusText, errorThrownValue) {
    //     console.log(
    //       "The jqXHRObject that came back from testing.html: ",
    //       jqXHRObject
    //     );
    //     console.log(
    //       "The status text that came back from testing.html: ",
    //       statusText
    //     );
    //     console.log(
    //       "The error thrown that came back from testing.html: ",
    //       errorThrownValue
    //     );
    //   })
    //   .always(function () {
    //     //   busy = false;
    //   });

    // getting json data, and using the callback instead
    $.get(
      "data/test2.json",
      "search=arduino", // just like when we did xhr.send("search=arduino")
      function (JSONDataFromFile, statusText, jqXHRObject) {
        // this will be called as if it was the done method
        console.log(
          "The data that came back from test2.json: ",
          JSONDataFromFile
        );
        console.log(
          "The status text that came back from test2.json: ",
          statusText
        );
        console.log(
          "The jqXHR object that came back from test2.json: ",
          jqXHRObject
        );
        $.each(JSONDataFromFile.events, function (i, val) {
          $("#content-wrapper").append(`
          <h1 class="regularGetRequest">${val.location}</h1>
          <div class="regularGetRequest">${val.date}</div>
          <img src="${val.map}" class="regularGetRequest">
          `);
        });
      },
      "json"
    );

    // getting json data, and using the callback instead
    $.getJSON(
      "data/test2.json",
      function (JSONDataFromFile, statusText, jqXHRObject) {
        // this will be called as if it was the done method
        console.log(
          "The data that came back from test2.json: ",
          JSONDataFromFile
        );
        console.log(
          "The status text that came back from test2.json: ",
          statusText
        );
        console.log(
          "The jqXHR object that came back from test2.json: ",
          jqXHRObject
        );
        $.each(JSONDataFromFile.events, function (i, val) {
          let locationObject = $(
            `<h1 class="getJSONRequest">${val.location}</h1>`
          );
          let dateObject = $(`<div class="getJSONRequest">${val.date}</div>`);
          let mapObject = $(`<img src="${val.map}" class="getJSONRequest">`);
          $("#content-wrapper")
            .append(locationObject)
            .append(dateObject)
            .append(mapObject);
        });
      }
    );
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
