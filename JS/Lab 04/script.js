/** @format */

//! 1. Task: Create a simple HTML page with:
document.write("<p>This is from an external file</p>");

function ClickAlert() {
  alert("Button Clicked!");
}

//! 2. Task: Write a function:
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log("'Hello World':", countVowels("Hello World"));
console.log("'JavaScript is Fun':", countVowels("JavaScript is Fun"));
console.log("'Ahmed Allam':", countVowels("Ahmed Allam"));

//! 3. Task: Write a script that:
let strNum = "42.5";
console.log("Number() =>", Number(strNum));
console.log("parseInt() =>", parseInt(strNum));
console.log("parseFloat() =>", parseFloat(strNum));

console.log("isNaN('ITI') =>", Number.isNaN(Number("ITI")));
console.log("isFinite(10) =>", Number.isFinite(10));
console.log("isFinite(Infinity) =>", Number.isFinite(Infinity));

console.log("MAX_VALUE =", Number.MAX_VALUE);
console.log("MIN_VALUE =", Number.MIN_VALUE);
console.log("EPSILON =", Number.EPSILON);

//! 4. Task: Experiment with the + operator:
console.log("2 + 3 =", 2 + 3);
console.log('"Ahmed" + " " + "Allam" =', "Ahmed" + " " + "Allam");
console.log("5 + '3' =", 5 + "3");

let x = 10;
let y = "Test";
let z = true;
let w;
console.log("typeof x = 10; => ", typeof x);
console.log("typeof y = 'test'; =>", typeof y);
console.log("typeof z = true; =>", typeof z);
console.log("typeof w =>", typeof w);

//! 5. Task: Write:
function sum(a, b) {
  return a + b;
}
console.log("sum(5, 3) =", sum(5, 3));

let multiply = function (a, b) {
  return a * b;
};
console.log("multiply(4, 6) =", multiply(4, 6));

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet("Ahmed");
greet();

//! 6. Task: Write a function demonstrating:
var scopeTestNum = "I am global";
function scopeTest() {
  var scopeTestNum = "I am local";
  console.log("Inside function:", scopeTestNum);
}
scopeTest();
console.log("Outside function:", scopeTestNum);

console.log("Before declaration:", hoistingVar); // undefined
var hoistingVar = "Now I'm defined";
console.log("Before declaration:", hoistingVar); // Now I'm defined

//! 7. Task: Write a function calculateHypotenuse(a, b) that:
function calculateHypotenuse(a, b) {
  const square = (x) => x * x;

  return Math.sqrt(square(a) + square(b));
}
console.log("Calculate hypotenuse of 3 and 4 =", calculateHypotenuse(3, 4));

//! 8. Task: Write a function sumAll() that:
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return arguments.length === 0 ? "No numbers provided" : total;
}
console.log("sumAll(1, 2, 3, 4) =", sumAll(1, 2, 3, 4));
console.log("sumAll() => ", sumAll());
console.log("sumAll(10, 20) =", sumAll(10, 20));
