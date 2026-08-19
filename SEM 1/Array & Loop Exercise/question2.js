function sumEvenNumbers(numbers) {
    let totalEven = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            totalEven += numbers[i];
        }
    }
    return totalEven;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));