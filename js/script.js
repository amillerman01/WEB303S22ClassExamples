// $(document).ready(function () { // long version of ready method
$(function () {
  // early examples
  // jQuery('li.hot').hide();
  // $("li.hot").hide(); // shorthand version

  // $("li#warm").hide(); // selects single element

  let $author = $("#author");
  let author = document.getElementById("author");

  // $author.hide(); // does work
  // author.hide(); // doesn't work

  // second list example

  // var $first = $("ul#list:first-child");
  // $first.slideToggle(3000);

  // list .html() example
  console.log("The html value of the first list item is: ", $("li").html());

  // list .text() example
  console.log(
    "The text value of all the list items and their descendent is: ",
    $("li").text()
  );
  console.log(
    "The text value of the first list item is ACTUALLY: ",
    $("li:first-child").text()
  );

  // list .html() and .text() setter examples
  $("li").html("<span class='blue'>All Blue</span>");

  $("li span").text("All Blue but different!");

  // chaining example

  // the old way without method chaining
  // $("li").hide();
  // $("li").html("<span class='blue'>All Blue</span>");
  // $("li").slideDown(1000);

  // The way to do this with method chaining
  $("li").hide().html("<span class='blue'>All Blue</span>").slideDown(1000);

  // remove example
  $("#author").remove();

  // replaceWith example
  $("p").replaceWith("<div>Actual content</div>");
});
