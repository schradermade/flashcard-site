$(document).ready(function() {
  $(".clickable").click(function() {
    $(".flashcard-quest").toggle();
    $(".flashcard-ans").toggle();
  });
});