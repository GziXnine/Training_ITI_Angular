/** @format */

//! 1. Task: Fetch and display a post
function postOne() {
  let x = new XMLHttpRequest();
  x.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  x.onload = function () {
    let d = JSON.parse(x.responseText);
    document.getElementById("p1").innerHTML =
      "<h3>" + d.title + "</h3><p>" + d.body + "</p>";
  };
  x.send();
}

//! 2. Task: Fetch and display all users
function showUsers() {
  let x = new XMLHttpRequest();
  x.open("GET", "https://jsonplaceholder.typicode.com/users");
  x.onload = function () {
    let users = JSON.parse(x.responseText);
    let u = document.getElementById("uList");
    u.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
      let item = document.createElement("li");
      item.innerText = users[i].name;
      u.appendChild(item);
    }
  };
  x.send();
}

//! 3. Task: Fetch and display local JSON data
function getLocalCourses() {
  let x = new XMLHttpRequest();
  x.open("GET", "data.json");
  x.onload = function () {
    let data = JSON.parse(x.responseText);
    let list = "";

    for (let i = 0; i < data.courses.length; i++) {
      let c = data.courses[i];
      list += "<div style='border:1px solid #ccc; margin:10px; padding:10px;'>";
      list += "<h3>" + c.course + "</h3>";
      list += "<p>Duration: " + c.duration + "</p>";
      list += "<p>Instructor: " + c.instructor + "</p>";
      list += "<p>Level: " + c.level + "</p>";
      list += "<p>Students: " + c.students + "</p>";
      list += "</div>";
    }

    document.getElementById("ld").innerHTML = list;
  };
  x.send();
}
//! 4. Task: Send form data to a server
function sendForm(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;

  let obj = {
    name: name,
    email: email,
  };

  let x = new XMLHttpRequest();
  x.open("POST", "https://jsonplaceholder.typicode.com/posts");
  x.setRequestHeader("Content-Type", "application/json");
  x.onload = function () {
    document.getElementById("res").innerText = x.responseText;
  };
  x.send(JSON.stringify(obj));
}

//! 5. Task: Load data with a spinner
function loadStuff() {
  document.getElementById("spin").style.display = "block";
  document.getElementById("info").innerHTML = "";

  let x = new XMLHttpRequest();
  x.open("GET", "https://jsonplaceholder.typicode.com/posts/2");
  x.onload = function () {
    document.getElementById("spin").style.display = "none";
    let d = JSON.parse(x.responseText);
    document.getElementById("info").innerHTML =
      "<h4>" + d.title + "</h4><p>" + d.body + "</p>";
  };
  x.send();
}

//! 6. Task: Handle bad URL request
function loadInvalidURL() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://invalid-api-url.typicode.com/test", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status !== 200) {
      document.getElementById("errorBox").innerText =
        "❌ Error: Failed to fetch data.";
    }
  };
  xhr.send();
}

//! 7. Task: Load names into a dropdown
function loadNames() {
  let x = new XMLHttpRequest();
  x.open("GET", "https://jsonplaceholder.typicode.com/users");
  x.onload = function () {
    let data = JSON.parse(x.responseText);
    let sel = document.getElementById("dd");
    for (let i = 0; i < data.length; i++) {
      let o = document.createElement("option");
      o.text = data[i].name;
      o.value = data[i].id;
      sel.appendChild(o);
    }
  };
  x.send();
}
