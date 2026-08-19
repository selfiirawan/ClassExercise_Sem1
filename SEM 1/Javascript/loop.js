// for
for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

// while
let input;
while (input !== '7') {
    input = prompt("Guess the secret number: ");
}

alert("Correct!");
console.log("Correct!");

// while method 2 
let secretNum = 7;
let input;

while (Number(input) !== secretNum) {
    input = prompt("Guess the secret number: ");
}

console.log("Correct!");
alert(`Correct! The secret number is: ${input}`);