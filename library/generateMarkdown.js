// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let shapeColor = data.shapeColor;
    let textColor = data.textColor;
  
    shapeColor = JSON.stringify(shapeColor);
    shapeColor = shapeColor.toLowerCase().trim();
    shapeColor = JSON.parse(shapeColor);
  
    textColor = JSON.stringify(textColor);
    textColor = textColor.toLowerCase().trim();
    textColor = JSON.parse(textColor);
  
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${data.text}</text>

</svg>
    `
  }
  
  module.exports = generateMarkdown;
  