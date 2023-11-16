// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./library/generateMarkdown');
const {validateText, validateMessage} = require('./library/validate');

// questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What is the text of your logo (must between 1-3 letters (inclusive)):',
        validate: validateText
    }, 
    {
        type: 'input',
        name: 'textColor',
        message: 'What text color would you like? (can be a hexadecimal number - remember to include the "#" symbol)', 
        validate: validateMessage
    }, 
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like for the logo?', 
        choices: [ 
                    'circle', 
                    'triangle', 
                    'square', 
                ],
        default: 'circle'
    }, 
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What is the color of your shape? (can be a hexadecimal number - remember to include the "#" symbol)', 
        validate: validateMessage
    }
];

// function to initialize app
async function init() {

    const answers = await inquirer.prompt(questions);
    const svgContent = generateMarkdown(answers);

    const currentDate = new Date().toISOString();
    const logoTitle = answers.text.split(' ').join('-');

    fs.writeFile(`${currentDate}-${logoTitle}.svg`, svgContent, (err) => 
        err ? console.log(err) : console.log('svg file successfully created')
    );
};

// function call to initialize app
init();
