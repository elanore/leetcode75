function findDifference(nums1, nums2) {
  // Step 1: Remove duplicates manually from nums1 and nums2
  const uniqueNums1 = nums1.filter(
    (num, index) => nums1.indexOf(num) === index
  );
  const uniqueNums2 = nums2.filter(
    (num, index) => nums2.indexOf(num) === index
  );

  // Step 2: Find numbers in nums1 that are not in nums2
  const diff1 = uniqueNums1.filter((num) => !nums2.includes(num));

  // Step 3: Find numbers in nums2 that are not in nums1
  const diff2 = uniqueNums2.filter((num) => !nums1.includes(num));

  // Step 4: Combine the results
  return [diff1, diff2];
}

// Example usage:
console.log(findDifference([1, 2, 3], [2, 4, 6])); // Output: [[1, 3], [4, 6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // Output: [[3], []]
