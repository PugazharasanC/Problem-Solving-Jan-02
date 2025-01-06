function sqrt(num) {
  if (num === 0 || num === 1) return num; // Handle edge cases for 0 and 1

  let start = 0;
  let end = num / 2; // Square root will not be larger than num/2 for num > 1

  // Start binary search
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midSquared = mid * mid;

    // If mid^2 is equal to num, return mid
    if (midSquared === num) return mid;

    // Adjust search range
    if (midSquared < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // Return the integer part of the square root
  return end;
}

console.log(sqrt(13)); // Should return 3 (since sqrt(13) ≈ 3.605)
