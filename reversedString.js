function reverseWords(s) {
  // Trim leading and trailing spaces, split the string by spaces, and filter out empty strings
  let words = s.trim().split(/\s+/);
  // Reverse the array of words and join them with a single space
  return words.reverse().join(" ");
}
