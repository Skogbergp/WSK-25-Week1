'use strict';

const result = document.getElementById('result');
const p1 = prompt("Enter the x and y coordinates of the first point separated by a comma (x,y):").split(",");
const p2 = prompt("Enter the x and y coordinates of the second point separated by a comma (x,y):").split(",");

const distance = Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
result.innerHTML = `The distance between (${p1[0]}, ${p1[1]}) and (${p2[0]}, ${p2[1]}) is ${distance.toFixed(2)}`;