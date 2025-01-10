//? Day 6: Recursion, Sliding Window, Two Pointers, and Hashing
//* Key Topics: Recursion, sliding window, and hashing.
//? Session Focus:
//* Learn recursive problem-solving approaches for problems like factorial, Fibonacci, and palindrome checking.
//* Understand sliding window techniques for finding subarrays and substrings.
//* Hashing for tracking counts, finding duplicates, and other problems.
//? Session Practice Questions:
//! Calculate the factorial of a number recursively.

// function factorial(n) {
//   if (n < 2) return 1;
//   return n * factorial(n - 1);
// }

function factorial(n, ans = 1) {
  // tail call recursion
  if (n < 2) return ans;
  return factorial(n - 1, ans * n);
}

// console.log(factorial(1));
// console.log(factorial(0));
// console.log(factorial(5));
// console.log(factorial(10));
//! Find the nth Fibonacci number using recursion.
function fibo(n) {
  if (n <= 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}
// console.log(fibo(1));
// console.log(fibo(2));
// console.log(fibo(3));
// console.log(fibo(4));
// console.log(fibo(5));
// console.log(fibo(6));
// console.log(fibo(7));
// console.log(fibo(10))
//! Check if a string is a palindrome using recursion.

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;
  if (str[start] != str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);
}

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("rac e car"));
// console.log(isPalindrome("thisisnotapalindrome"));
//! Implement a recursive binary search.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  return binarySearch(arr, target, mid + 1, end);
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
//! Find the length of the longest substring without repeating characters (sliding window).
function longestSubstring(str) {
  let start = 0;
  let end = 0;
  let len = 0;
  let maxSub = "";
  let substring = "";
  while (end < str.length) {
    const ind = substring.indexOf(str.charAt(end));
    if (ind == -1) {
      substring += str.charAt(end);
      end++;
      if (len < end - start) {
        len = end - start;
        maxSub = substring;
      }
    } else {
      substring = substring.substring(ind + 1);
      start = start + ind + 1;
    }
  }
  return [maxSub, len];
}
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("thisisastring"));
console.log(longestSubstring("pwwkew"));

// Post-Session Practice Questions:
//  Solve the Tower of Hanoi problem.
//  Reverse a string recursively.
//  Count the number of ways to climb stairs (1 or 2 steps at a time).
//  Find the longest subarray with equal 0s and 1s.
//  Find all triplets in an array that sum up to zero.
//  Find the first missing positive integer in an array.
//  Find the longest mountain in an array.
//  Merge two sorted arrays without using extra space.
//  Find the first non-repeating character in a string.
//  Find the longest substring with exactly k distinct characters.
