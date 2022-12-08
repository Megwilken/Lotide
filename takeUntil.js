const takeUntil = function(array, callback) {
  let results = [];
  for (let items in array) {
    if (callback(array[items])) {
      console.log(array);
      results = array.slice(0, items);
      break;
    }
  }
  return results;
};

module.exports = takeUntil;