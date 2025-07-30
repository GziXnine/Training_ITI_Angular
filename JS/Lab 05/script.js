/** @format */

//! 1. Task: Conditional Statements Practice
function checkAge(age) {
  if (age < 12) {
    console.log("Child");
  } else if (age < 18) {
    console.log("Teen");
  } else if (age < 60) {
    console.log("Adult");
  } else {
    console.log("Senior");
  }
}
checkAge(25); // Outputs: Adult
checkAge(18); // Outputs: Adult
checkAge(71); // Outputs: Senior

function getName(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
  }
}
getName(3); // Outputs: Tuesday
getName(2); // Outputs: Monday
getName(1); // Outputs: Sunday

function checkOddEven(num) {
  console.log(num & 1 ? "Odd" : "Even");
}
checkOddEven(7); // Outputs: Odd
checkOddEven(2); // Outputs: Even

//! 2. Task: Using eval() Safely
console.log(eval("5 + 10 * 2")); // Outputs: 25
console.log(eval("Math.sqrt(16)")); // Outputs: 4
console.log(eval("Math.max(10, 20, 30)")); // Outputs: 30

//! 3. Task: Array Practice
var arr = [-200, -50, 22, 100, 177, 15, 0, 22, 20, 82];

function filterGreaterThan50(arr) {
  return arr.filter((num) => num > 50);
}
console.log(filterGreaterThan50(arr)); // Outputs: [100, 177, 82]

arr.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

var allEven = arr.every((num) => num % 2 === 0);
console.log("All even?", allEven); // Outputs: false

var hasAbove90 = arr.some((num) => num > 90);
console.log("Any number > 90?", hasAbove90); // Outputs: true

var sortedDesc = [...arr].sort((a, b) => b - a);
console.log("Sorted Desc:", sortedDesc);

var reversed = [...arr].reverse();
console.log("Reversed:", reversed);

//! 4. Task: Array Mini Projects
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Remove Duplicates:", removeDuplicates(arr));

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of array:", sumArray(arr)); // Outputs: 188

//! 5. Task: Math Object Practice
console.log("Random Integer (1 - 100):", Math.floor(Math.random() * 100) + 1); // Outputs: Random Integer

function factorial(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log("Factorial of 5:", factorial(5)); // Outputs: 120
console.log("Factorial of 6:", factorial(6)); // Outputs: 720

function getSqureRoot(num) {
  return Math.sqrt(num);
}
console.log("Square root of 49:", getSqureRoot(49)); // Outputs: 7

//! 6. Task: Date Object Practice
function formatDate() {
  var day = new Date().getDate();
  return day === 0 || day === 6;
}
console.log("Is today a weekend?", formatDate()); // Outputs: false

function getCurrentMonth() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[new Date().getMonth()];
}
console.log("Current Month:", getCurrentMonth()); // Outputs: July
