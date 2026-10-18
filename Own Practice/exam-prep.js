// 1. push / pop
console.log("\n=== PUSH AND POP ===\n");
let nums = [1, 2, 3];

nums.push(4);    // add the last 
console.log(`push: ${nums}\n`);

nums.pop();     // remove the last 
console.log(`pop: ${nums}\n`);

nums.pop();
console.log(`pop 2: ${nums}\n`);


// 2. unshift / shift
console.log("\n=== UNSHIFT / SHIFT ===\n");
let colors = ["red", "green"];

colors.unshift("blue");     // add the first
console.log(`unshift: ${colors}\n`);

colors.shift();            // remove the first
console.log(`shift: ${colors}\n`);

colors.shift();
console.log(`shift 2: ${colors}\n`);


// 3. splice
console.log("\n=== SPLICE ===\n");
let letters = ["a", "b", "c", "d", "e"];

letters.splice(1, 2);    // remove 2 items starting index [1]
console.log(`splice remove: ${letters}\n`);

letters.splice(1, 0, "x");    // add item x at index [1] , without removing existing item
console.log(`splice add: ${letters}\n`);


// 4. slice
console.log("\n=== SLICE ===\n");
let nums2 = [10, 20, 30, 40, 50];

let part = nums2.slice(1, 3);    // copy index [1] - [3], non inclusive
console.log(`slice: ${part}\n`);
console.log(`nums array: ${nums2}\n`);


// 5. map
console.log("\n=== MAP ===\n");

let names = ["ali", "siti", "mei"];

let upper = names.map(function(n) {
    return n.toUpperCase();
});
console.log(`map: ${upper}\n`);


// 6. filter
console.log("\n=== FILTER ===\n");
let ages = [12, 18, 25, 15];

let adults = ages.filter(a => a >= 18);
console.log(`filter: ${adults}\n`);


// 7. find / findindex
console.log("\n=== FIND / FINDINDEX ===\n");
let nums3 = [5, 12, 8, 130, 44];

let findNum = nums3.find(n => n > 10);
console.log(`find: ${findNum}\n`);

let findIndex = nums3.findIndex(function(n) {
    return n > 10;
});
console.log(`find index: ${findIndex}\n`);

console.log(nums3.find(n => n > 500)); // undefined
console.log(nums3.findIndex(n => n > 500)); // -1 (false / NA)


// 8. some
console.log("\n=== SOME ===\n");
const numArray = [3, 6, 9];

const isEven = numArray.some(function(n) {
    return n % 2 === 0;
});
console.log(`some for even: ${isEven}\n`);


// 9. concat, tostring, join
console.log("\n=== CONCAT / TOSTRING / JOIN ===\n");
let a = [1, 2];
let b = [3, 4];

let all = a.concat(b);
console.log(`concat:`);
console.log(all);

console.log("\nto string: ");
console.log(all.toString());

console.log("\njoin");
console.log(all.join(" - "));