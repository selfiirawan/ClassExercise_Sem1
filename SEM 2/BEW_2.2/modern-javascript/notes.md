
# Variable Scope and Definitions

## 2 different types of scope (technically 3)
- function scope
- block scope
- global scope (default)

<hr>

- `var` : function scope
- `let` : block scope
- `const` : block scope

## What is Scope
- Scope is the area of code in which a variable is relevant
- commonly defined by **curly brackets**
- most commonly used by **if/else**, **loops** and **functions**

### block-scope declaration: let and const
```
// let
let fruit = "apple"

if (true) {
    fruit = "banana";
    console.log(fruit)
}

console.log(fruit)
```

```
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
```
<br>

# Arrow Function in Callback
- `.filter` , `.map` , `.reduce` -> array methods to do specific actions
- `.filter` -> to find only the elements that fit the specified criteria
- `.map` -> essentially behave like a for...of loop but simpler. will create new array
- `.reduce` -> used for calculating total / accumulation of value

### eg with callback
```
const list = [2, 4, 6, 8]

                     // [ this is callback ]
const list2 = list.filter(num => num > 5)
console.log(list2) // [6, 8]

                          // [ this is callback ]
const listMultiplied = list.map(num => num * 2)
console.log(listMultiplied)

                        // // [ this is callback ]
const sum = list.reduce((total, num) => total + num, 0)
console.log(`the result of .reduce is ${sum}`)
```

### eg without callback
```
const listSquared = list.map(function(num) {
    return num * num
})

console.log(listSquared)
```
<br>

> basically just a function that use => instead of function()