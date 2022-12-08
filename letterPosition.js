const letterPosition = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && results[sentence[i]].length) {
      results[sentence[i]].push[i];
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPosition;