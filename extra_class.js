const nums = [3,8,15,42,7];

nums.forEach(function(n) {
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
});