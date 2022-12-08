const flatten = function(firstArray) {
  let result = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i])) {
      result = result.concat(flatten(firstArray[i]));
    } else {
      result.push(firstArray[i]);
    }
  }
  return result;
};

module.exports = flatten;