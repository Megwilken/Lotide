const findKey = function(object, callback) { //function
  for (let key in object) { //scan object
    if (callback(object[key])) // if callback returns truthy
      return key;
  }
};                             ///else undefined

module.exports = findKey;