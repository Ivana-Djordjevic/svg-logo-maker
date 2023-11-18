// packages needed for this application
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

/* 
The following example test should pass:
const shape = new Triangle();
shape.setColor("blue"); is this necessary?
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/

//what happens when the example test does not pass? my class has a different svg file structure, so it will never pass as is

//also assignment requires logo to be 300x200 pixels, so what do we do with the square?

// is it better to have individual test files for each, or keep them like this

//what should i write under the 'tests' section in the readme? just that i use Jest for unit tests?

// test to see if if the render() method works as it should
describe('Shapes', () => {

    //circle
    describe('Circle', () => {
        it('should render the SVG file content for a circle', () => {
            const shape = new Circle('yellow', 'blue', 'pop')

            expect(shape.render()).toEqual(`
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="yellow" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">pop</text>
      </svg>`)
        })
    })

    //triangle
    describe('Triangle', () => {
        it('should render the SVG file content for a triangle', () => {
            const shape = new Triangle('yellow', 'blue', 'pop')

            expect(shape.render()).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="yellow" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">pop</text>
            </svg>`)
        })
    })

    //square
    describe('Square', () => {
        it('should render the SVG file content for a square', () => {
            const shape = new Square('yellow', 'blue', 'pop')

            expect(shape.render()).toEqual(`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="300" height="200" fill="yellow" />    
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">pop</text>
        </svg>`)
        })
    })
})