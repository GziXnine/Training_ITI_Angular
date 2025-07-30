/** @format */

//! 1. DOM Practice Tasks
function addListItem() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("myList").appendChild(li);
}

let count = 0;
function increment() {
  count++;
  document.getElementById("counter").textContent = count;
}

//! 2. BOM & Window Practice Tasks
// window.onload = () => alert("Welcome to My Website");

console.log("Current URL:", window.location.href);

setInterval(() => {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString();
}, 1000);

//! 3. Navigator Object Practice Tasks
function displayBrowserInfo() {
  document.getElementById(
    "browserInfo"
  ).textContent = `Browser: ${navigator.appName}, Version: ${navigator.appVersion}`;
}
// window.onload = () => displayBrowserInfo();

// window.onload = () => {
//   alert(`Online status: ${navigator.onLine ? "Online" : "Offline"}`);
// };

//! 5. Event Object & Event Handling Practice Tasks
const btn1 = document.getElementById("hoverBtn");
btn1.addEventListener("mouseover", () => (btn1.style.backgroundColor = "red"));
btn1.addEventListener("mouseout", () => (btn1.style.backgroundColor = ""));

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
});

document.getElementById("outerDiv").addEventListener("click", function (e) {
  console.log("Clicked Element:", e.target.tagName);
});

function handleClick() {
  alert("Button clicked! Now this action is removed.");
  toggleBtn.removeEventListener("click", handleClick);
}
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", handleClick);
