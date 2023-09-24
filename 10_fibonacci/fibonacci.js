const fibonacci = function(fibonnaciIndex) {
    myArray = [];
    if(fibonnaciIndex < 0) return 'OOPS';

    for(let i = 0; i < fibonnaciIndex; i++) {
        if(i === 0 || i === 1){
            myArray[i] = 1;
        } else {
            myArray[i] = myArray[i - 1] + myArray[i - 2];
        }
    }
    return myArray[myArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
