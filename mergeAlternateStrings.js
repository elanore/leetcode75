var mergeAlternately = function (word1, word2) {
  let merged = "";
  let i = 0,
    j = 0;

  // Add characters from both strings alternately
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      merged += word1[i];
      i++;
    }
    if (j < word2.length) {
      merged += word2[j];
      j++;
    }
  }

  return merged;
};

// Example usage
console.log(mergeAlternately("12345", "shiny"));
