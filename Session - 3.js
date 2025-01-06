//? Day 3: Arrays & Array Methods
//* Key Topics: Arrays, rotations, sorting, searching, and manipulation.
//? Session Focus:
//* Array manipulation: rotating arrays, finding the second-largest element, and array sums.
//* Sorting basics: bubble sort, selection sort.
//* Removing duplicates from arrays and basic search operations.

//? What is sorting?
//* arranging the elements in purticular way
// * either small elements to larger elements or vise versa

//? how to sort the array in ascending order?
//* if you pick any element in the array, the previous would be smaller and the next element will be greater.
//* if we ensure this pattern, we can say the array is sorted

//? Bubble Sort

function bubbleSort(arr) {
  console.log(arr);
  for (let itr = 0; itr < arr.length; itr++)
    for (let ind = 1; ind < arr.length; ind++) {
      if (arr[ind] < arr[ind - 1]) {
        let temp = arr[ind];
        arr[ind] = arr[ind - 1];
        arr[ind - 1] = temp;
      }
    }
  console.log(arr);
}
// bubbleSort([5,4,3,2,1])
// bubbleSort(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)));

// ? Selection Sort

function selectionSort(arr) {
  console.log(arr);
  for (let ind = 0; ind < arr.length; ind++) {
    let minInd = ind;
    for (let index1 = ind + 1; index1 < arr.length; index1++) {
      if (arr[index1] < arr[minInd]) {
        minInd = index1;
      }
    }

    if (ind != minInd) {
      arr[ind] = arr[ind] + arr[minInd];
      arr[minInd] = arr[ind] - arr[minInd];
      arr[ind] = arr[ind] - arr[minInd];
    }
  }
  console.log(arr);
}

// selectionSort([5, 4, 3, 2, 1]);
// selectionSort(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))

//? Session Practice Questions:
//! Remove duplicates from a sorted array.

function removeDuplicates(arr /*Unsorted*/) {
  console.log(arr);

  for (let ind = 0; ind < arr.length; ind++) {
    let value = arr[ind];
    if (value != undefined)
      for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
        if (value == arr[ind1]) {
          arr[ind1] = undefined;
        }
      }
  }
  let slowInd = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] != undefined) {
      arr[slowInd] = arr[ind];
      slowInd++;
    }
  }
  arr.length = slowInd;
  console.log(arr);
}
// removeDuplicates([
//   3, 6, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 9, 4, 8, 1, 5, 8, 4, 5,
// ]);

function removeDuplicatesSorted(arr) {
  console.log(arr);
  let slowInd = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] != arr[slowInd]) {
      slowInd++;
      arr[slowInd] = arr[ind];
    }
  }
  arr.length = slowInd + 1;
  console.log(arr);
}

// removeDuplicatesSorted([1, 2, 2, 3, 4, 4, 4, 5, 5])
//! Rotate an array by one position.
// [1, 2, 3, 4, 5] => [5, 1, 2, 3, 4];

function rotate(arr) {
  console.log(arr);
  // arr.unshift(arr.pop());
  let temp = arr[0];
  // console.log(temp)
  for (let ind = 1; ind < arr.length; ind++) {
    arr[ind - 1] = arr[ind];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
}

// rotate([1, 2, 3, 4, 5]);
//! Reverse the elements in an array.
function reverse(arr, start = 0, end = arr.length - 1) {
  console.log(arr);
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  console.log(arr);
}
//! Rotate an array to the left by K positions.
// reverse([1,2,3,4,5], 0, 4)
function rotateLeft(arr, k) {
  console.log(arr, k);
  k = k % arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr);
  /*
// not optimised
    while (k--) {
        rotate(arr)
    }
    */
  console.log(arr, k);
}

rotateLeft([1, 2, 3, 4, 5, 6], 100);
//! Find the second-largest element in an array.
// [5, 5, 5, 5, 5, 5, 4]; => 4
// [5, 4, 3, 2, 1, 0, -1]; => 4
function secondLargest(arr) {
  if (arr.length <= 1) return -1;
  let largest = arr[0];
  let secLargest = -Infinity;
  for (let ind = 1; ind < arr.length; ind++) {
    if (arr[ind] > largest) {
      secLargest = largest;
      largest = arr[ind];
    } else if (arr[ind] > secLargest && arr[ind] != largest) {
      secLargest = arr[ind];
    }
  }
  return secLargest == -Infinity ? -1 : secLargest;
}
console.log(secondLargest([5, 5, 5, 5, 5, 5, 4]));
console.log(secondLargest([5]));
console.log(secondLargest([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]));
console.log(secondLargest([5, 4, 3, 2, 1]));
//! Find the number of occurrences of an element in an array.
function findFreq(arr) {
  console.log(arr);
  let freq = {};
  for (let ind = 0; ind < arr.length; ind++) {
    if (freq[arr[ind]]) {
      freq[arr[ind]]++;
    } else {
      freq[arr[ind]] = 1;
    }
  }
  return freq;
}

// const x = findFreq(Array.from({ length: 25 }, () => Math.floor(Math.random() * 10)));
// console.log(x)

//? finding sqrt of a given number
function sqrt(num) {
  let start = 0;
  let end = num / 2;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid == num) return mid;
    else if (mid * mid > num) end = mid+1;
    else start = mid-1;
  }
  return start;
}

console.log(sqrt(13));

// ? Post-Session Practice Questions:
// todo Calculate the sum of elements in an array.
// todo Merge two sorted arrays.
// todo Find the cumulative sum of an array.
// todo Calculate the product of all elements in an array.
// todo Check if an array is a palindrome.
// todo Find the intersection of two arrays.
// todo Search for an element in a sorted array.
// todo Find the difference between the maximum and minimum elements.
// todo Find the element with the second-largest frequency.
