function guessNumber(n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const result = guess(mid);

    if (result === 0) {
      return mid; // Correct guess
    } else if (result === -1) {
      high = mid - 1; // The picked number is lower
    } else {
      low = mid + 1; // The picked number is higher
    }
  }

  return -1; // This line will never be reached given valid input
}
