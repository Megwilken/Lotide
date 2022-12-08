const without = function(source, itemToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemToRemove.length; j++) {
      if (source[i] !== itemToRemove[j]) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
}

module.exports = without;