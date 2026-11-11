/*

variable scope and definitions

2 different types of scope (technically 3)
- function scope
- block scope
- global scope (default)

var - function scope
let - block scope
const - block scope

*/

// block-scope declaration: let and const
// let
let fruit = "apple"

if (true) {
    fruit = "banana";
    console.log(fruit)
}

console.log(fruit)
console.log("\n")

// const 
const car = "toyota"

if (true) {
    const car = "honda"
    console.log(car)

    if (true) {
        const car = "mazda"
        console.log(car)
    }
}

console.log(car)