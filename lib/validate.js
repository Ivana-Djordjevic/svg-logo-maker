// to validate user's input

const validateText = (answer) => {
    if (answer.length === 0 || answer.length > 3) {
        return 'Please enter a text between 1-3 characters';
    }
    return true;
};

const validateMessage = (answer) => {
    if (!answer) {
        return 'Please enter a value';
    }
    return true;
};

module.exports =  {validateText, validateMessage};
