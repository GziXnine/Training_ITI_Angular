/** @format */

window.addEventListener("load", function () {
  const leftSection = document.getElementById("left");
  const rightSection = document.getElementById("right");
  const allImages = document.getElementsByTagName("img");
  let draggedImage = null;

  for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("dragstart", startDrag);
  }

  rightSection.addEventListener("dragleave", leaveDrag);
  leftSection.addEventListener("dragenter", enterDrag);
  leftSection.addEventListener("dragover", overDrag);
  leftSection.addEventListener("drop", drop);

  function startDrag(e) {
    draggedImage = e.target;
    e.dataTransfer.setData("text/html", e.target.outerHTML);
    console.log("Dragging started:", e.target.outerHTML);
  }

  function drop(e) {
    e.preventDefault();
    if (draggedImage) {
      leftSection.innerHTML += e.dataTransfer.getData("text/html");
      draggedImage.style.display = "none";
      draggedImage = null;
    }
    leftSection.style.backgroundColor = "";
  }

  function overDrag(e) {
    e.preventDefault();
    leftSection.style.backgroundColor = "lightblue";
  }

  function leaveDrag(e) {
    e.preventDefault();
  }

  function enterDrag(e) {
    e.preventDefault();
    leftSection.style.backgroundColor = "lightyellow";
  }
});
