const score = prompt("Enter your score: ");
const result = document.getElementById('result');
if (score >= 0 && score < 40) {
    result.innerHTML = `Your grade is 0.`;
} else if (score >= 40 && score < 52) {
    result.innerHTML = `Your grade is 1.`;
} else if (score >= 52 && score < 64) {
    result.innerHTML = `Your grade is 2.`;
} else if (score >= 64 && score < 76) {
    result.innerHTML = `Your grade is 3.`;
} else if (score >= 76 && score < 88) {
    result.innerHTML = `Your grade is 4.`;
} else if (score >= 88 && score <= 100) {
    result.innerHTML = `Your grade is 5.`;
} else {
    result.innerHTML = `Invalid score.`;
}