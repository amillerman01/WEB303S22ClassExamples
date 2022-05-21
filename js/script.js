/* NOTE this jquery should not be here like this, 
we are still missing a ready function */

// jQuery('li.hot').hide();
$('li.hot').hide();

$('li#warm').hide();

let $author = $('#author');
let author = document.getElementById("author");

$author.hide();
// author.hide();


// second list example
var $first = $('ul#list:first-child');
$first.slideToggle(3000);