var numbers = [1, 131, 231, 42, 53, 1, 54, 553, 3, 2];

console.log('unsorted: ' + numbers);
// Sort the array in ascending order
numbers.sort(function (a, b) {
  return a - b;
});

console.log('sorted: ' + numbers);
