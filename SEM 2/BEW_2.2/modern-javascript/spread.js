const { name } = require("ejs")

console.log("\n")

// === Spread Operator [...] ===
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

const num3 = [...num1, ...num2]
console.log(num3)

// === Spread Operator with Objects ===
const person = {
    name: "John Doe",
    age: 18
}

const student = {
    ...person,
    grade: "Diploma"
}
console.log(student)


// === Using Spread Operator in Function Argument ===
function sum(a,  b, c) {
    return a + b + c
}
const listOfNums = [15, 30, 45]
console.log(sum(...listOfNums))


// === Destructuring + Spread operator together
// Arrays
const phones = ["iPhone", "Samsung", "Oppo", "Vivo", "Nokia"]
const [firstPhone, ...rest] = phones

console.log(firstPhone)
console.log(...rest)

// Object
const phone = {
    brand: "Apple",
    model: "iPhone 18 Pro Max",
    year: 2026
}

const updatedPhone = {
    ...phone,
    model: "iPhone Duo"
}
console.log(updatedPhone)


// === Combining Destructuring and Spread in Function Arguments ===
const printSoldierInfo = ({name, ...rest}) => {
    console.log(name)
    console.log(rest)
}

const soldier = {
    id: 101,
    name: "Yoo Si Jin",
    age: 32,
    rank: "Captain"
}
printSoldierInfo(soldier)

console.log("\n")