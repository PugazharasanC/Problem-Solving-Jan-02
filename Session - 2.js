//? Day 2: Recursion & Searching Algorithms
//* Key Topics: Recursion, linear and binary search, and basic search operations.
//? Session Focus:
//* Understand recursion and solve problems like factorials and Fibonacci.
//* Learn linear and binary search techniques to find elements in arrays.
//* Practice simple search-based problems.
//? Session Practice Questions:
//! Calculate the factorial of a number recursively.
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5))

// tail call recursion
function fact(n, curr = 1) {
  if (n < 0) return;
  if (n < 2) return curr;
  return fact(n - 1, curr * n);
}

// fact(5) => fact(5,1) => fact(4, 1*5) => fact(4, 5) => fact(3, 5*4) => fact(3, 20) => fact(2, 20*3) => fact(2, 60) => fact(1, 60*2) => fact(1, 120) => 120

// console.log(fact(5))
// console.log(fact(-5))
//! Implement linear search to find an element in an array.

function lieanerSearch(arr, target) {
  console.log(arr);
  console.log(target);

  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] === target) return ind;
  }
  return -1;
}
// console.log(
//   lieanerSearch(
//     Array.from({ length: 25  }, () => Math.floor(Math.random() * 100)),
//     Math.floor(Math.random() * 100)
//   )
// );

function recursiveSearch(arr, target, ind = 0) {
  if (ind == 0) {
    console.log(arr);
    console.log(target);
  }
  if (ind == arr.length) return -1;
  if (arr[ind] == target) return ind;
  return recursiveSearch(arr, target, ind + 1);
}
// console.log(
//   recursiveSearch(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 100)),
//     Math.floor(Math.random() * 100)
//   )
// );

//! Implement a searching algorythm to find an targeted element on a sorted array.
// loop

function search(arr, target) {
  console.log(arr.join());
  console.log(target);
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else if (arr[mid] > target) end = mid - 1;
  }
  return -1;
}

// console.log(
//   search(
//     Array.from({ length: 15 }, () => Math.floor(Math.random() * 50)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 50)
//   )
// );

function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) return mid;

  if (arr[mid] < target)
    return recursiveBinarySearch(arr, target, mid + 1, end);
  if (arr[mid] > target)
    return recursiveBinarySearch(arr, target, start, mid - 1);
}
// const arr = Array.from({ length: 15 }, () =>
//     Math.floor(Math.random() * 50)
//   ).sort((a, b) => a - b),
//   target = Math.floor(Math.random() * 50);
// console.log(arr)
// console.log(target)
// console.log(
//     recursiveBinarySearch(
//         arr, target
//     )
// )

//! Find the first and last occurrence of a target in an array.
function firstAndLastOccurance(arr, target) {
  console.log(arr.join());
  console.log(target);

  let first = -1,
    last = -1;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] == target) {
      if (first == -1) {
        first = ind;
      }
      last = ind;
    }
  }
  return [first, last];
}
// console.log(
//   firstAndLastOccurance(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 15)),
//     Math.floor(Math.random() * 15)
//   )
// );

function recursiveBinarySearchForFirst(
  arr,
  target,
  start = 0,
  end = arr.length - 1
) {
  if (start > end) {
    if (arr[start] == target) return start;
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] == target)
    return recursiveBinarySearchForFirst(arr, target, start, mid - 1);

  if (arr[mid] < target)
    return recursiveBinarySearchForFirst(arr, target, mid + 1, end);
  if (arr[mid] > target)
    return recursiveBinarySearchForFirst(arr, target, start, mid - 1);
}

function recursiveBinarySearchForLast(
  arr,
  target,
  start = 0,
  end = arr.length - 1
) {
  if (start > end) {
    if (arr[start - 1] == target) return start - 1;
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] == target)
    return recursiveBinarySearchForLast(arr, target, mid + 1, end);

  if (arr[mid] < target)
    return recursiveBinarySearchForLast(arr, target, mid + 1, end);
  if (arr[mid] > target)
    return recursiveBinarySearchForLast(arr, target, start, mid - 1);
}

function findFirstAndLastInSorted(arr, target) {
  console.log(arr);
  console.log(target);
  let first = recursiveBinarySearchForFirst(arr, target);
  let last = recursiveBinarySearchForLast(arr, target);
  return [first, last];
}
// console.log(
//   findFirstAndLastInSorted(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 15)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 15)
//   )
// );
//! Search for a target in a rotated sorted array.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// [7, 8, 9, 10, 1, 2, 3, 4, 5, 6];

function searchRotated(arr, target) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) {
      if (arr[end] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] > target) {
      if (arr[start] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

console.log(searchRotated([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 2));

//  ? Post-Session Practice Questions:
// todo  Count occurrences of a target using binary search.
// todo  Find the index where an element should be inserted in a sorted array.
// todo  Find the peak element in a mountain array.
// todo  Find the smallest missing element in a sorted array.
// todo  Find the floor and ceiling of a target in a sorted array.
// todo  Perform ternary search on a sorted array.
// todo  Find the index of a target in an infinite array.
// todo  Find the closest element to a target in a sorted array.
// todo  Find the peak index in a bitonic array.
// todo  Implement an exponential search.

// function printTillN(n) {
//   if (n < 1) return; // base condition

//   console.log(n);
//   printTillN(n - 1); // recursive call
//   console.log(n);
// }

// printTillN(10);
