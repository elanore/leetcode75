function countBits(n) {
  // Initialize an array of size n + 1 with 0
  const ans = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    // The number of 1's in `i` is equal to the number of 1's in `i >> 1`
    // plus `i & 1` (whether the last bit of `i` is 1)
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return ans;
}

// Example usage:
console.log(countBits(2)); // Output: [0, 1, 1]
console.log(countBits(5)); // Output: [0, 1, 1, 2, 1, 2]
