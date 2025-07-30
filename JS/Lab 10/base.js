/** @format */

//! 4. Task: Create a main script that imports the Circle, Rectangle, and Square classes and demonstrates their functionality
import { Rectangle, Square } from "./squaresModule.js";
import Circle from "./circleModule.js";

const rect = new Rectangle("blue", 10, 5);
const square = new Square("green", 7);
const circle = new Circle("red", 4, 0, 0);

console.log(`Rectangle area: ${rect.getArea()}`);
console.log(`Square area: ${square.getArea()}`);
console.log(`Circle area: ${circle.getArea().toFixed(2)}`);
