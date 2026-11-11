// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
console.log("\n")

// WHILE LOOP
let i = 1
while (i <= 20) {
    console.log(`push up: ${i}`)
    i++
}
console.log("\n")

// Loops with arrays 
let fruits = ["Apple", "Orange", "Banana"]

for (let fruit of fruits) {
    console.log(fruit)
}
console.log("\n")

// Loops with objects
const user = {
    name: "John",
    role: "Admin"
}

Object.values(user).forEach((prop) => {
    console.log(prop)
})
console.log("\n")

// another version
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`)
}
console.log("\n")

// Array of Objects with loops
const listOfUser = [
    {
        name: "Jason",
        age: "24", 
        role: "Software Developer",
        experience: 60
    },
    {
        name: "Alex",
        age: "27",
        role: "Senior Software Developer",
        experience: 24
    },
    {
        name: "Alicia",
        age: "22",
        role: "Software Developer",
        experience: 26
    }
]
console.log("\n")

// Output the user's key-value
for (const user of listOfUser) {

    const year = (Math.floor(user.experience) / 12).toFixed()
    const month = Math.floor(user.experience) % 12

    console.log(`This user's name is ${user.name}`)
    console.log(`This user is ${user.age} years old`)
    console.log(`This user's role is ${user.role}`)

    if (month == 0) {
        console.log(`This user has ${year} years of experience`)
    } else {
        console.log(`This user has ${year} years and ${month} months of experience`)
    }

    console.log("\n")
}