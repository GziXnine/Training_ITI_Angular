/** @format */

//! 3. Task: Create a class called Circle that extends Shape and has properties radius, x, and y
import Shape from "./shapeModule.js";

class Circle extends Shape {
  constructor(color, radius, x, y) {
    super(color);
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  getArea() {
    this.DrawShape();
    return Math.PI * this.radius * this.radius;
  }
}

export default Circle;
