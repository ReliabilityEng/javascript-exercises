const repeatString = function(textToRepeat, repetitionCount) {
    
    if (repetitionCount < 0) {
        return 'ERROR';
    } else {
        let myString = '';
        for (let i = 0; i < repetitionCount; i++) {
            myString+=textToRepeat;
        }
        return myString;
    }
};

// Do not edit below this line
module.exports = repeatString;
