function highestAltitude(gain) {
  let maxAltitude = 0; // Start at altitude 0
  let currentAltitude = 0;

  // Calculate altitudes sequentially
  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    if (currentAltitude > maxAltitude) {
      maxAltitude = currentAltitude;
    }
  }

  return maxAltitude;
}

// Example usage
const gain1 = [-5, 1, 5, 0, -7];
console.log(`Highest Altitude for gain1: ${highestAltitude(gain1)}`); // Output: 1

const gain2 = [-4, -3, -2, -1, 4, 3, 2];
console.log(`Highest Altitude for gain2: ${highestAltitude(gain2)}`); // Output: 0
