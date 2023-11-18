// packages needed for this application
const Shape = require('./shape');

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }

    render() {

        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}

module.exports = Triangle;
