// packages needed for this application
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

//sets the shape that will be rendered relative to user's input
function setShapes(data) {
    if (data.shape === 'circle') {
        const circle = new Circle(data.shapeColor, data.textColor, data.text);
        return circle.render();
    }
    if (data.shape === 'triangle') {
        const triangle = new Triangle(data.shapeColor, data.textColor, data.text);
        return triangle.render();
    }
    if (data.shape === 'square') {
        const square = new Square(data.shapeColor, data.textColor, data.text);
        return square.render();
    }
}

module.exports = setShapes;