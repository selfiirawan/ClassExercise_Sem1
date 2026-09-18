const words = "banana";

const vowels = "aeiouAEIOU";

let count = 0;
words.split("").forEach(function(char) {
    if (vowels.includes(char)) {
        count++;
    }
});

console.log(`Vowels: ${count}`);

// 1. use split("") then forEach
// 2. use includes()