const palindromes = function (myString) {
    let pattern = [...myString.replace(/[^a-z0-9]/gi, '').toLowerCase()];
    let patternReverse = Array.from(pattern).reverse();
    return pattern.join('') === patternReverse.join('');
};

// Do not edit below this line
module.exports = palindromes;
