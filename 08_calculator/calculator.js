const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(myArray) {
	return myArray.reduce((total, elem) => total += elem, 0);
};

const multiply = function(myArray) {
  return myArray.reduce((total, elem) => total *= elem, 1);
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num) {
  factorialArray = [...Array(num).keys()].map(num => num + 1);
	return factorialArray.reduce((product, num) => product *= num, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
