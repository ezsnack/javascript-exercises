const palindromes = function (string) {
  let lettersOnly = "";
  const lowercaseString = string.toLowerCase();
  for (let i = 0; i < lowercaseString.length; ++i) {
    const charCode = lowercaseString.charCodeAt(i);
    if ((charCode > 96 && charCode < 123) || (charCode > 47 && charCode < 58)) //apparently the test tests for numbers as well, which was not mentioned in the readme
      lettersOnly += lowercaseString[i];
  }
  const reversedString = lettersOnly.split("").reverse().join("");
  if (reversedString === lettersOnly)
    return true;
  else
    return false;
};

// Do not edit below this line
module.exports = palindromes;
