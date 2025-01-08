var reverseVowels = function (s) {
  // Define vowels (case-insensitive)
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  // Convert string to an array for easy manipulation
  const chars = s.split("");
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    // Move left pointer forward until a vowel is found
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    // Move right pointer backward until a vowel is found
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    // Swap the vowels
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  // Join the array back into a string and return
  return chars.join("");
};

// Example usage:
const input1 = "IceCreAm";
console.log(reverseVowels(input1)); // Output: "AceCreIm"

const input2 = "leetcode";
console.log(reverseVowels(input2)); // Output: "leotcede"
