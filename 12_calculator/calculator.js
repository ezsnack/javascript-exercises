const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
  return array.reduce((sum, number) => sum * number, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if (x == 0) return 1;
  if (x < 0) return undefined;
  let result = 1;
	for (let i=2; i <= x; ++i)
    result *= i;
  return result;
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
