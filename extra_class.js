const numbers = [3, 8, 15, 42, 7];

numbers.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
});