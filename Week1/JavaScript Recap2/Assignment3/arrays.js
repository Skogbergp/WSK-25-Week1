var numbers = [];
var evenNumbers = [];

const results = document.createElement("div");
document.body.appendChild(results);


var input = prompt("Enter a number (or type 'stop' to stop)");
while(input != "stop"){
    numbers.push(parseInt(input));

    input = prompt("Enter a number (or type 'stop' to stop)");
}

for (const number of numbers) {
    if(number % 2 == 0){
        evenNumbers.push(number);
        results.innerHTML += number + " ";
    }
}
document.body.appendChild(document.createElement("p")).innerHTML="program ended";


