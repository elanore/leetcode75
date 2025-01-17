function pivotIndex(nums) {
  // Calculate the total sum of the array
  let totalSum = nums.reduce((sum, num) => sum + num, 0);

  // Initialize left sum as 0
  let leftSum = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the right sum as totalSum - leftSum - nums[i]
    let rightSum = totalSum - leftSum - nums[i];

    // Check if left sum is equal to right sum
    if (leftSum === rightSum) {
      return i; // Return the pivot index
    }

    // Update the left sum by adding the current number
    leftSum += nums[i];
  }

  // If no pivot index is found, return -1
  return -1;
}
