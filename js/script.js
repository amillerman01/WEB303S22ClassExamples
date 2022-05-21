/* NOTE this jquery should not be here like this, 
we are still missing a ready function */

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
// $("li").html("<span class='blue'>All Blue</span>");

$("li").text("All Blue");
