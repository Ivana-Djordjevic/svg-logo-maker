// packages needed for this application
const Shape = require('./shape');

class Square extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }

  render() {
    
    return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="300" height="200" fill="${this.shapeColor}" />    
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
  }
}
  
module.exports = Square;