function uniqueOccurrences(arr) {
  // Create an empty object to store the counts
  const countMap = {};

  // Use .map to iterate over the array and count occurrences
  arr.map((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  // Get the occurrences as an array
  const occurrences = Object.values(countMap);

  // Use a Set to track unique occurrences
  const uniqueOccurrencesSet = new Set(occurrences);

  // If the size of the Set equals the length of the occurrences array, all occurrences are unique
  return uniqueOccurrencesSet.size === occurrences.length;
}

// Example usage
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurrences([1, 2])); // Output: false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // Output: true
