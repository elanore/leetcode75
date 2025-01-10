function isSubsequence(s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
}

// Example usage:
let s1 = "abc",
  t1 = "ahbgdc";
console.log(isSubsequence(s1, t1)); // Output: true

let s2 = "axc",
  t2 = "ahbgdc";
console.log(isSubsequence(s2, t2)); // Output: false
