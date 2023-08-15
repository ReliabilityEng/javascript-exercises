const convertToCelsius = function(tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) * (5/9);
  return parseFloat(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function(tempCelsius) {
  const tempFahrenheit = tempCelsius * (9/5) + 32;
  return parseFloat(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
