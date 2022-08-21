// Manipulating Attribute
$("h1").css("color", "blue");

// Adding event Listener
$("button").click(function () {
  $("h1").css("color", "yellow");
});

// change text with keypree

$(document).keypress(function (event) {
  $("h1").text(event.key);
  $("h1").css("color", "yellow");
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

// animaation
$("button").on("click", function () {
  $("h1").slideUp();
});
// animation
$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});
