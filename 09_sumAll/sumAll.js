const sumAll = function(intOne, intTwo) {
  if (intOne <= 0 || intTwo <= 0 ||
      parseInt(intOne) !== intOne || parseInt(intTwo) !== intTwo ||
      isNaN(intOne) || isNaN(intTwo))
        return "ERROR";
      
  if (intOne == intTwo) return intOne;
  let lower, higher;
  let sum = 0;
  if (intOne < intTwo) {
    lower = intOne;
    higher = intTwo;
  } else {
    lower = intTwo;
    higher = intOne;
  }
  for (let i = lower; i <= higher; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
