const findKeyByValue = function(object, value) {
  const key = Object.keys(object);
  for (const results of key) {
    if (object[results] === value)
      return results;
  }
};


module.exports = findKeyByValue;