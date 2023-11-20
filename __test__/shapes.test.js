// packages needed for this application
const Shape = require('../lib/shape');
const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

// test to see if if the render() method & Shape constructor work as intended
describe('Shapes', () => {

    //shape class
    describe('Shape Class', () => {
        it('should have the constructor set the properties correctly', () => {
            const shapeColor = 'yellow';
            const textColor = 'blue';
            const text = 'pop';

            const shape = new Shape(shapeColor, textColor, text);

            expect(shape.shapeColor).toEqual(shapeColor);
            expect(shape.textColor).toEqual(textColor);
            expect(shape.text).toEqual(text);
        });
    });

    //circle
    describe('Circle SVG', () => {
        it('should render the SVG file content for a circle', () => {
            const shape = new Circle('yellow', 'blue', 'pop');

            expect(shape.render()).toEqual(`
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="yellow" />
        <text x="150" y="110" font-size="60" text-anchor="middle" fill="blue">pop</text>
      </svg>`);
        });
    });

    //triangle
    describe('Triangle SVG', () => {
        it('should render the SVG file content for a triangle', () => {
            const shape = new Triangle('yellow', 'blue', 'pop');

            expect(shape.render()).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="yellow" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">pop</text>
            </svg>`);
        });
    });

    //square
    describe('Square SVG', () => {
        it('should render the SVG file content for a square', () => {
            const shape = new Square('yellow', 'blue', 'pop');

            expect(shape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill="yellow" />    
            <text x="105" y="110" font-size="60" text-anchor="middle" fill="blue">pop</text>
        </svg>`);
        });
    });
});