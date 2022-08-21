// changing data string

var name = prompt("what is your name");

var fName = name.slice(0, 1);

var upFname = fName.toUpperCase();

var sisaName = name.slice(1, name.length);

sisaName = sisaName.toLowerCase();

var result = upFname + sisaName;

alert("hello, " + result);

//  basic aritmathic

var myDogage = prompt(" berapa umur kucingmu?");

var result = (myDogage - 2) * 4 + 21;

alert(" your dog age is " + result + "in human age");

// FUNCTION : Bmi Callculator

function kalkulatorBMI(weight, hight) {
  var bmi = weight / (hight * hight);
  console.log(bmi);

  return Math.round(bmi);
}
kalkulatorBMI(68, 1.8);

//  If else and comparator

function isLeap(year) {
  if (year % 2 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year";
      } else {
        return " not a leap year";
      }
    } else {
      return "Leap year";
    }
  } else {
    ("not a leap year");
  }
}
isLeap(1948);

//Switch Statement
switch (buttonInnerHTML) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  default:
}

// Array and allerting

var guestList = ["warham", "hayat", "ham", "allang", "why"];

var guesName = prompt("Please tell me your name?");

if (guestList.includes(guesName)) {
  alert(" welcome " + guesName);
} else {
  alert("sorry, you need to register");
}

// intermediate array
var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Bizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;

  console.log(output);
}

fizzBuzz()[
  // array challange
  ("warham", "hayat", "ham", " woody", "andy")
];
function whosPaying(names) {
  var numberOfpeople = names.length;
  var randomPosition = Math.floor(Math.random() * numberOfpeople);
  var randomPick = names[randomPosition];

  return randomPick + " is going to buy lunch today";
}
whosPaying(["warham", "hayat", "ham", " woody", "andy"]);

// while
var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Bizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

fizzBuzz();

// Higher Order Function

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

calculator(4, 2, divide);

// while challange
var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottle";
  if (numberOfBottles === 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// for loop
for (i = 1; i < 10; i++) {
  console.log(i);
}

// for loop challange
function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

output = fibonacciGenerator(5);
console.log(output);

// Object

var pelayanHotel = {
  nama: jony,
  umur: 22,
  siapBekerja: true,
  temapt: ["ruang tame", "lobby", "office"],
};

// Constructor Function

function houseKeeper(yearOfExperiance, name, cleaningRepertoire) {
  (this.yearOfExperiance = yearOfExperiance),
    (this.nama = name),
    (this.cleaningRepertoire = cleaningRepertoire);
}

var houseKeeper1 = new houseKeeper(9, "Woody", ["lobby", "bathroom"]);

//CALLBACK FUNCTION
function anotherAddevenlistener(typeOfEvent, callback) {
  var evenThatHappen = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2,
  };

  if (evenThatHappen.eventType === typeOfEvent) {
    callback(evenThatHappen);
  }
}

anotherAddevenlistener("keypress", function (event) {
  console.loge(event);
});
// contoh callback using addEventListener
document.addEventListener("keypress", function (i) {
  console.log(i);
});

// Set Timeout
// Syntax = setTimeout(function, milliseconds, param1, param2, ...)

function buttonAnimation(currentKey) {
  var activeButtom = document.querySelector("." + currentKey);

  activeButtom.classList.add("pressed");

  setTimeout(function () {
    activeButtom.classList.remove("pressed");
  }, 200);
}
