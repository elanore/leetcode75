function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Create an array for the prefix products
  const prefix = new Array(n);
  prefix[0] = 1;
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // Create an array for the suffix products
  const suffix = new Array(n);
  suffix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  // Calculate the answer by multiplying prefix and suffix products
  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * suffix[i];
  }

  return answer;
}

// Example Usage:
const nums1 = [1, 2, 3, 4];
console.log(productExceptSelf(nums1)); // Output: [24, 12, 8, 6]

const nums2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums2)); // Output: [0, 0, 9, 0, 0]
