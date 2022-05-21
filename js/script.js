// $(document).ready(function () { // long version of ready method
$(function () {
  // early examples
  // jQuery('li.hot').hide();
  // $("li.hot").hide(); // shorthand version

  // $("li#warm").hide(); // selects single element

  //   let $author = $("#author");
  //   let author = document.getElementById("author");

  //   // $author.hide(); // does work
  //   // author.hide(); // doesn't work

  //   // second list example

  //   // var $first = $("ul#list:first-child");
  //   // $first.slideToggle(3000);

  //   // list .html() example
  //   console.log("The html value of the first list item is: ", $("li").html());

  //   // list .text() example
  //   console.log(
  //     "The text value of all the list items and their descendent is: ",
  //     $("li").text()
  //   );
  //   console.log(
  //     "The text value of the first list item is ACTUALLY: ",
  //     $("li:first-child").text()
  //   );

  //   // list .html() and .text() setter examples
  //   $("li").html("<span class='blue'>All Blue</span>");

  //   $("li span").text("All Blue but different!");

  //   // chaining example

  //   // the old way without method chaining
  //   // $("li").hide();
  //   // $("li").html("<span class='blue'>All Blue</span>");
  //   // $("li").slideDown(1000);

  //   // The way to do this with method chaining
  //   $("li").hide().html("<span class='blue'>All Blue</span>").slideDown(1000);

  //   // remove example
  //   $("#author").remove();

  //   // replaceWith example
  //   $("p").replaceWith("<div>Actual content</div>");

  //   // attr method
  //   console.log("Github link", $("a#github-link").attr("href"));
  //   // using single attribute setter
  //   //   $("a#github-link").attr(
  //   //     "href",
  //   //     "https://github.com/amillerman01/GitHub-Tutorial"
  //   //   );
  //   //   // using object to set multiple attributes
  //   //   $("a#github-link").attr({
  //   //     href: "https://github.com/amillerman01/GitHub-Tutorial",
  //   //     "aria-label": "A link to my github",
  //   //   });
  //   // using method to set attribute
  //   $("a").attr("href", function (index, value) {
  //     console.log(
  //       "current anchor tag index: ",
  //       index,
  //       " and the current value of href is: ",
  //       value
  //     );
  //     return "https://github.com/amillerman01/GitHub-Tutorial";
  //   });

  // explicit iteration
  //   $("ul#iterateOverThisList li").each(function () {
  //     var listItemId = $(this).attr("id");
  //     $(this).append(" has an id of " + listItemId);
  //   });

  // event binding
  $("#author").on("click", function (e) {
    console.log("Click event happened and captured!");
    console.log("event data looks something like this: ", e);
    // functionality goes here when click happens
  });

  // animation example
  $("li").on("click", function () {
    $(this).animate(
      {
        opacity: 0.0,
        "padding-left": "+=80",
      },
      2000
    );
  });
});
