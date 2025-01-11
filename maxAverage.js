// Function to find the maximum average subarray of length k
function findMaxAverage(nums, k) {
  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  maxSum = currentSum;

  // Use sliding window to calculate the sum of subarrays of length k
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the maximum average
  return maxSum / k;
}

// Example usage
const nums1 = [1, 12, -5, -6, 50, 3];
const k1 = 4;
console.log(findMaxAverage(nums1, k1).toFixed(5)); // Output: 12.75000

const nums2 = [5];
const k2 = 1;
console.log(findMaxAverage(nums2, k2).toFixed(5)); // Output: 5.00000
