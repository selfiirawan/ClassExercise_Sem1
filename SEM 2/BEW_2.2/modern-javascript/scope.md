
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