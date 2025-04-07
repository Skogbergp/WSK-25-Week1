let numbers = [1, 131, 231, 42, 53, 1, 54, 553, 3, 2];

console.log('unsorted: ' + numbers);

function sortArray(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log('sorted: ' + sortArray(numbers));
