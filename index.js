// packages needed for this application
const fs = require('fs'); 
const init = require('./lib/inquire');
const setShapes = require('./lib/setShapes');

//renders SVG file
async function renderFile() {
    
    const answers = await init();
    const svgContent = setShapes(answers);

    const currentDate = new Date().toISOString();
    const logoTitle = answers.text.split(' ').join('-');

    fs.writeFile(`${currentDate}-${logoTitle}.svg`, svgContent, (err) => 
        err ? console.log(err) : console.log('svg file successfully created')
    );
};

// function call to initialize app
renderFile();
