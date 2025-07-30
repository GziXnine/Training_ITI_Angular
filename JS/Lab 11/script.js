/** @format */

//! 1. Task Manager using Set
class Task {
  constructor(name, completed = false) {
    this.name = name;
    this.completed = completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = new Set();
  }

  addTask(task) {
    this.tasks.add(task);
  }

  showTaskNames() {
    return [...this.tasks].map((task) => task.name);
  }

  getCompletedTasks() {
    return [...this.tasks].filter((task) => task.completed);
  }
}

const manager = new TaskManager();
manager.addTask(new Task("Study", true));
manager.addTask(new Task("Exercise", false));
manager.addTask(new Task("ITI Angular", true));

console.log("Task Names:", manager.showTaskNames());
console.log("Completed Tasks:", manager.getCompletedTasks());

//! 2. Task Average Age of Active Users using Array Methods
var users = [
  { name: "Ahmed", age: 20, active: true },
  { name: "Sara", age: 25, active: false },
  { name: "Lina", age: 30, active: true },
];

var total = 0,
  count = 0;

for (var i = 0; i < users.length; i++) {
  if (users[i].active) {
    total += users[i].age;
    count++;
  }
}

console.log("Average Age of Active Users:", total / count);

//! 3. Task Find Most Repeated Character
function findMostRepeatedChar(text) {
  var counts = new Map();

  for (var i = 0; i < text.length; i++) {
    var char = text[i];

    if (counts.has(char)) {
      counts.set(char, counts.get(char) + 1);
    } else {
      counts.set(char, 1);
    }
  }

  var maxChar = "";
  var maxCount = 0;

  counts.forEach((value, key) => {
    if (value > maxCount) {
      maxCount = value;
      maxChar = key;
    }
  });

  return { maxChar, maxCount };
}

var text = findMostRepeatedChar("Ahmed Mohammed Allam");
console.log("Most Char:", text.maxChar, "\nMost Count:", text.maxCount);

//! 4. Task Find Unique Characters
console.log("Characters:", Array.from("Hello"));

console.log("Product IDs:", Array.of(11, 22, 33));

var items = [
  { id: 0, name: "MAC" },
  { id: 1, name: "TV" },
  { id: 2, name: "Phone" },
];

var foundItem = items.find((item) => item.name === "Phone");
console.log("Found Item:", foundItem);

var itemIndex = items.findIndex((item) => item.id === 2);
console.log("Item Index:", itemIndex);

//! 5. Task Validate Email Format
function checkEmail(email) {
  var hasAt = email.includes("@");
  var hasDot = email.includes(".");
  var startsCorrect = email.startsWith("user");
  var endsCorrect = email.endsWith(".com") || email.endsWith(".org");

  return hasAt && hasDot && startsCorrect && endsCorrect;
}

console.log(checkEmail("user123@gmail.com")); // true
console.log(checkEmail("admin@mail.org")); // false

//! 6. Task Math Tools
const MathUtils = {
  trunc: (x) => Math.trunc(x),
  sign: (x) => Math.sign(x),
  cbrt: (x) => Math.cbrt(x),
  log2: (x) => Math.log2(x),
  log10: (x) => Math.log10(x),
};

console.log("Math.trunc(5.99):", MathUtils.trunc(5.99));
console.log("Math.sign(-78):", MathUtils.sign(-78));
console.log("Math.cbrt(125):", MathUtils.cbrt(125));
console.log("Math.log2(16):", MathUtils.log2(16));
console.log("Math.log10(100):", MathUtils.log10(100));
