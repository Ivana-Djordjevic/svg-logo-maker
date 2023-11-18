// packages needed for this application
const inquirer = require('inquirer');
const {validateText, validateMessage} = require('./validate');

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

//returns user's answers
async function init() {

    const answers = await inquirer.prompt(questions);

    return answers
}

module.exports = init