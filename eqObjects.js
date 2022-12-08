const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1).length;     
  const key2 = Object.keys(object2).length;
  if (key1 !== key2) {                          
    return false;
  } else {
    for (let i = 0; i < key1.length; i++) {     
      if (key1[i] !== key2[i]) {
        return false;
      }
    }
  }
  return true;                                 
};

module.exports = eqObjects;