var gcdOfStrings = function (str1, str2) {
  // Helper function to find the greatest common divisor of two numbers
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Check if the concatenation conditions are met
  if (str1 + str2 !== str2 + str1) {
    return ""; // No common divisor string
  }

  // Calculate the GCD of the lengths of the two strings
  const gcdLength = gcd(str1.length, str2.length);

  // Return the substring of the GCD length from either string
  return str1.substring(0, gcdLength);
};

// Example usage:
var str1 = "ABCABC";
var str2 = "ABC";
console.log(gcdOfStrings(str1, str2));

str1 = "ABABAB";
str2 = "ABAB";
console.log(gcdOfStrings(str1, str2));

str1 = "LEET";
str2 = "CODE";
console.log(gcdOfStrings(str1, str2));
