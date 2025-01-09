var moveZeroes = function (nums) {
  let lastNonZeroIndex = 0; // Index to place the next non-zero element

  // First pass: move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  // Second pass: fill the rest of the array with zeros
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Example 1
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

// Example 2
let nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
