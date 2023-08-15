const reverseString = function(stringToReverse) {
    let stringArray = stringToReverse.split('');
    let arrayReversed = stringArray.reverse();
    let stringReversed = arrayReversed.join('');

    return stringReversed;
    // Better solution is to chain methods
    // return string.split("").reverse().join("");
};

reverseString('Hello');

// Do not edit below this line
module.exports = reverseString;
