var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current plot and its neighbors are empty
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1; // Plant a flower here
      count++;
    }

    if (count >= n) {
      return true; // Early exit if we can plant n flowers
    }
  }

  return count >= n;
};

// Example usage:
const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1)); // Output: true

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2)); // Output: false
