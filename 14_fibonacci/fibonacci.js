const fibonacci = function(num) {
  let x = 0;
  let y = 1;
  if (num == 0)
    return x;
  if (num < 0)
    return "OOPS";
  for (let i = 1; i < num; i++) {
    const temp = y;
    y += x;
    x = temp;
  }
  return y;
};

// Do not edit below this line
module.exports = fibonacci;
