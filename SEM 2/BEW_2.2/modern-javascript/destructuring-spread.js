
// === Object destructuring ===

const student = {
    name: "John",
    age: 20,
    grade: "Diploma",
    parents: {
        father: "Dwayne",
        mother: "Joana"
    }
}

const name = student.name // noob way
const { age, grade } = student // pro way 

console.log("\n")
console.log(name)
console.log(age)
console.log(grade)
console.log("\n")


// === Nested destructuring
const { parents: { father, mother } } = student

console.log(father)
console.log(mother)
console.log("\n")


// === Destructuring Arrays ===
const colors = ["red", "green", "blue"]

const [ first, second, third ] = colors

console.log(first)
console.log(second)
console.log(third)
console.log("\n")


// === Destructuring function parameters ===
function greetPerson({ name, age }) {
    console.log(`Hello, ${name}. you are ${age} years old`)
}

const person = {
    name: "Jackie",
    age: 67
}
greetPerson(person)
console.log("\n")


// === Exercise ===
// write me the above function, name it greetPersonWithoutDestructuring, 
// do it the way without destructuring. The call of the function has to be the
// same, only passing person as an entire object variable in.

const greetPersonWithoutDestructuring = (object) => {
    console.log(`Hello, ${object.name}. you are ${object.age} years old`)
}
greetPersonWithoutDestructuring(person)
console.log("\n")


// === Default value with Destructuring ===
const car = {
    brand: "Toyota", 
    model: "Camry",
    color: "blue"  // try commenting this
}

                    // the default color is black
const { brand, model, color = "black" } = car
console.log(color)
console.log("\n")


// same thing with arrays 
const shoes = ["Air Jordan", "Yeezy"]

const [ firstShoe, secondShoe, thirdShoe = "Speedcat" ] = shoes
console.log(thirdShoe)
console.log("\n")
