const removeFromArray = function(array, ...theArgs) {
    let filterArray = [...theArgs];
    return array.filter((element) => !filterArray.includes(element, 0));
};

// Do not edit below this line
module.exports = removeFromArray;
