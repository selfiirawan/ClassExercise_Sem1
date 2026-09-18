const numbers = [12,45,3,89,21];

let max = numbers[0];
numbers.forEach(function(num) {
    if (num > max) {
        max = num;
    }
});

console.log("largest: " + max);