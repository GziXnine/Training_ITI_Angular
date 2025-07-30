/** @format */

//! 1. Task
let arr = [-200, -50, 22, 100, 177, 15, 0, 22, 20, 82];

let sortedAsc = [...arr].sort((a, b) => a - b);
console.log("Sorted Asc:", sortedAsc);

let reversed = [...arr].reverse();
console.log("Reversed:", reversed);

let greaterThan50 = arr.filter((num) => num > 50);
console.log("Filtered > 50:", greaterThan50); // Outputs: [100, 177, 82]

let max = Math.max(...arr);
let min = Math.min(...arr);
console.log("Max:", max, "Min:", min);

//! 2. Task
function calc(operator, ...nums) {
  let result;

  switch (operator) {
    case "+":
      result = nums.reduce((a, b) => a + b, 0);
      break;
    case "*":
      result = nums.reduce((a, b) => a * b, 1);
      break;
    case "-":
      result = nums.reduce((a, b) => a - b);
      break;
    case "/":
      result = nums.reduce((a, b) => a / b);
      break;
    default:
      return console.log("Unsupported operator");
  }

  console.log(
    `Result of ${operator} operation for ${nums.join(", ")} is ${result}`
  );
}
calc("+", 1, 2, 3, 4, 5);
calc("*", 1, 2, 3, 4, 5);

//! 3. Task
const project = {
  projectId: prompt("Enter Project ID:"),
  projectName: prompt("Enter Project Name:"),
  duration: prompt("Enter Project Duration (in days):"),

  printData: function () {
    console.log(
      `ID: ${this.projectId}, Name: ${this.projectName}, Duration: ${this.duration}`
    );
  },
};
console.log("Project Object:", project);
project.printData();
