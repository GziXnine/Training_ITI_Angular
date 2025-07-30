/** @format */

//! 1. Task: Create a class called Shape with a private property color
class Shape {
  #color;

  constructor(color) {
    this.#color = color;
  }

  set Color(newColor) {
    this.#color = newColor;
  }

  get Color() {
    return this.#color;
  }

  DrawShape() {
    console.log(`Shape color is: ${this.#color}`);
  }
}

export default Shape;
