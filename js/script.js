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
