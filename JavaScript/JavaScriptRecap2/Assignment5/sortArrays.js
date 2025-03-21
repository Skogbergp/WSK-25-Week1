let numbers = [1, 131, 231, 42, 53, 1, 54, 553, 3, 2];

console.log('unsorted: ' + numbers);

function sortArray(arr, order) {
  if (order === 'desc') {
    return arr.sort(function (a, b) {
      return b - a;
    });
  }
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log('sorted desc: ' + sortArray(numbers, 'desc'));
console.log('sorted asc: ' + sortArray(numbers, 'asc'));
