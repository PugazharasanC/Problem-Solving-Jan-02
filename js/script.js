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
debugger;
console.log(searchRotated([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 10));
