const sumAll = function(num1, num2) {
    // Check validity of input
    // Cannot be negatives or non numerical
    if (typeof(num1) === 'string' || num1 < 0 || isNaN(num1) ||
        typeof(num2) === 'string' || num2 < 0 || isNaN(num2))
    {
        return 'ERROR';
    }

    // Identify which of the num1, num2 arguments is lower
    // This is used to set startNum and endNum for increasing order
    const identifyLowerNum = (num1, num2) => {
    if (num1 > num2) {
        const startNum = num2;
        const endNum = num1;
        return {'startNum':startNum, 'endNum': endNum};
    } else {
        const startNum = num1;
        const endNum = num2;
        return {'startNum':startNum, 'endNum': endNum};
    }
    }

    const startNum = identifyLowerNum(num1, num2).startNum;
    const endNum = identifyLowerNum(num1, num2).endNum;
    
    // Generating the array of sum queue to add
    // +1 added to numDelta to get the correct array size
        const arraySize = endNum - startNum + 1;
        const sumQueue = [...Array(arraySize).keys()].map((element) => element + startNum);

    // Adding all the element in array
        let sum = 0;
        for (let i = 0; i < arraySize; i++){
            sum += sumQueue.shift();
        }

        return sum;
};

// Do not edit below this line
module.exports = sumAll;
