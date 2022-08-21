// .addEventListener(event, function, useCapture)
// event = nama eventnya seperti "click"
// function = nama functionnya
//  useCapture = opsional, true or false

function handClick() {
  alert(" it's working");
}
document.querySelector("button").addEventListener("click", handClick);

var numberOfButton = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handClick);
}
// bisa juga lansung tulis function du parameternya
for (i = 0; i < numberOfButton; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handClick() {
      alert(" it's working");
    });
}

for (i = 0; i < numberOfButton; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handClick() {});
}

// to make constructor function
var buttonInnerHTML = this.innerHTML;
switch (buttonInnerHTML) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  default:
}
