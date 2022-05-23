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
          // note we need to use append() here and not html()
          // if we use html(), we lose all the entries except the last one
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

    // basic ajax request sample
    // $.ajax("test.json", {
    //   // the settings object
    // });

    // another ajax request, but just using settings object for definition
    // $.ajax({
    //   url: "test.json",
    //   beforeSend: function () {
    //     // do this before the request is sent
    //   },
    //   complete: function () {
    //     // essentially the callback method we used in our get()
    //   },
    //   // the rest of the settings object
    // });
  });
});
