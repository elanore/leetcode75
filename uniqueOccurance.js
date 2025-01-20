function uniqueOccurrences(arr) {
    // Object to store the frequency of each element
    const frequency = {};

    // Count the occurrences of each element
    for (const num of arr) {
        if (frequency[num] === undefined) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    }

    // Array to store the frequencies
    const frequencies = [];
    for (const key in frequency) {
        if (frequency.hasOwnProperty(key)) {
            frequencies.push(frequency[key]);
        }
    }

    // Check if all frequencies are unique
    for (let i = 0; i < frequencies.length; i++) {
        for (let j = i + 1; j < frequencies.length; j++) {
            if (frequencies[i] === frequencies[j]) {
                return false;
            }
        }
    }

    return true;
}

// Example usage:
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurrences([1, 2]));             // Output: false
console.log(uniqueOccurrences([-3, 0
