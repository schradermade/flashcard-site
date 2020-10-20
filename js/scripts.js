$(document).ready(function() {
  $(".clickable").click(function() {
    $(".flashcard-ans").fadeToggle();
    $(".prompt").fadeToggle();
  });
});



/*
$(document).ready(function() {
  $("button#hide").click(function() {
    $("button").removeClass();
    $("button").addClass("green-background");
  });
  */

  /*1
$( "li" ).eq( 2 ).css( "background-color", "red" );

*/