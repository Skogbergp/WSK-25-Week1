const result = document.getElementById('result');
const s1 = prompt('Enter the length of side 1:');
const s2 = prompt('Enter the length of side 2:');
const s3 = prompt('Enter the length of side 3:');

if (s1 === s2 && s2 === s3) {
  result.innerHTML = `The triangle with side lengths ${s1}, ${s2}, and ${s3} is an equilateral triangle.`;
} else if (s1 === s2 || s2 === s3 || s1 === s3) {
  result.innerHTML = `The triangle with side lengths ${s1}, ${s2}, and ${s3} is an isosceles triangle.`;
} else {
  result.innerHTML = `The triangle with side lengths ${s1}, ${s2}, and ${s3} is a scalene triangle.`;
}
