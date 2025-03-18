const num = prompt('Enter a positive number: ');
let sum = 0;
const result = document.getElementById('result');

for (let i = 0; i <= num; i++) {
  sum += i;
}

result.innerHTML = `sum of natural numbers is ${sum}.`;
