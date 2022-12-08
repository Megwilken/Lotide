const countLetters = function(string) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    result++;
  }
  return result;
};
  
module.exports = countLetters;