/** @format */
//! 1. Document Object Tasks
function initializePage() {
  document.getElementById("secondPara").textContent = "Text Changed on Load!";

  const paraTags = document.getElementsByTagName("p");
  document.getElementById("pCount").innerText =
    "Number of <p> tags: " + paraTags.length;
}

//! 3. Form Object Tasks
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fname = this.fname.value;
  const lname = this.lname.value;
  document.getElementById("formResult").innerText = `Hello ${fname} ${lname}`;
});

//! 4. Dropdown List Tasks
function displayFruit() {
  const fruit = document.getElementById("fruitSelect").value;
  document.getElementById("fruitResult").innerText = "Selected: " + fruit;
}

function addFruit() {
  const option = new Option("Mango", "Mango");
  document.getElementById("fruitSelect").add(option);
}

//! 5. Radio Button Tasks
function showGender(value) {
  document.getElementById("genderResult").innerText =
    "Selected Gender: " + value;
}

function checkSelectedGender() {
  const radios = document.getElementsByName("gender");
  for (let radio of radios) {
    if (radio.checked) {
      alert("Checked Gender: " + radio.value);
      return;
    }
  }

  alert("No Gender Selected");
}

//! 6. Checkbox Tasks
function updateHobbies() {
  const checkboxes = document.querySelectorAll(".hobby");
  let selected = [];
  checkboxes.forEach((cb) => {
    if (cb.checked) selected.push(cb.value);
  });
  document.getElementById("hobbyList").innerText =
    "Hobbies: " + selected.join(", ");
}

function toggleAll(all) {
  const checkboxes = document.querySelectorAll(".hobby");
  checkboxes.forEach((cb) => (cb.checked = all.checked));
  updateHobbies();
}

//! 7. Button Tasks
function disableMe(btn) {
  btn.disabled = true;
  btn.innerText = "Disabled";
}

//! 8. Using this in Events
function changeText(btn) {
  btn.innerText = "Clicked!";
}