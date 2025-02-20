function increasingTriplet(nums) {
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;

    for (let num of nums) {
        if (num <= first) {
            first = num; // Update the smallest number
        } else if (num <= second) {
            second = num; // Update the second smallest number
        } else {
            // If we find a number greater than both, return true
            return true;
        }
    }
    return false; // No triplet found
}

// Example Usage
console.log(increasingTriplet([1, 2, 3, 4, 5])); // Output: true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // Output: false
console.log(increasingTriplet([2,
