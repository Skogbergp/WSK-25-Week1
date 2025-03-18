'use strict';
const celsius = prompt('Enter the temperature in Celsius:');
let fahrenheit = (celsius * 9) / 5 + 32;
const result = document.getElementById('result');
console.log(celsius);
console.log(fahrenheit);

result.innerText = celsius + '°C is ' + fahrenheit + '°F';
console.log(celsius + '°C is ' + fahrenheit + '°F');
