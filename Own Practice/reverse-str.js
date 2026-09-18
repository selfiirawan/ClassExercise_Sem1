const word = "hello";

// method 1
let reverse = "";

for(let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}

console.log(`method 1: ${reverse}`);

// method 2
const newStr = word.split("").reverse().join('');
console.log(`method 2: ${newStr}`);

/*
    split() = split str to array
    reverse() = only works for array
    join() = change array to str again
*/