var numbers = [];
for (var i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt("Enter a number: ")));
}
console.log("Numbers: " + numbers);

var num = parseInt(prompt("Enter a number to search: "));

console.log(numbers.includes(num) ? "Number found" : "Number not found");

numbers.pop(numbers.length - 1);
console.log("Numbers: " + numbers);

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Numbers: " + numbers);