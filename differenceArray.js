function findDifference(nums1, nums2) {
  // Convert nums1 and nums2 to sets to remove duplicates
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Find elements in nums1 that are not in nums2
  const diff1 = [...set1].filter((num) => !set2.has(num));

  // Find elements in nums2 that are not in nums1
  const diff2 = [...set2].filter((num) => !set1.has(num));

  // Return the result as a list of two lists
  return [diff1, diff2];
}

// Example usage:
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2)); // Output: [[1, 3], [4, 6]]

const nums1_2 = [1, 2, 3, 3];
const nums2_2 = [1, 1, 2, 2];
console.log(findDifference(nums1_2, nums2_2)); // Output: [[3], []]
