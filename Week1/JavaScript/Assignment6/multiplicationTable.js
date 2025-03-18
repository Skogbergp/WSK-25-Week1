const userInput = parseInt(prompt("Enter a number to generate multiplication table: "));
const resultTable = document.createElement("table");
document.body.appendChild(resultTable);


for (let i = 1; i <=userInput ; i++) {
    var tr = document.createElement("tr");
    for(let j = 1; j <= userInput; j++){
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(`${i*j}`));
        tr.appendChild(td);
    
    }
    
    
    resultTable.appendChild(tr);

}