// arrow function syntax
const multiply = (a, b) => a * b

// traditional syntax
function traditionalMultiply(a, b) {
    return a * b
}

// display all items from an argument
const displayAll = (arr) => {
    for (const item of arr) {
        console.log(item)
    }
}

const phones = ["samsung", "iphone", "huawei"]
displayAll(phones)

// more functions example
const convertCMtoM = (cm) => {
    const m = cm / 100
    return m
}

const lengthOfCarInM = 300
console.log(convertCMtoM(lengthOfCarInM))


// class exercise 
// write an arrow function that convert from kgs to lbs 
const kgsToLbs = (kgs) => kgs * 2.2

console.log(kgsToLbs(5))


// arrow function with callback 
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

// i want a product of the array using .reduce method, in arrow function format 
const product = list.reduce((total, num) => total * num, 1)
console.log(product)