
const marks = 70
const failGrade = 59

if (marks > failGrade) {
    console.log("You passed!")
} else {
    console.log("You failed!")
}

const standardPay = 8
const minimumHours = 40
const otHours = 20

let standardRate = 1.5

if (otHours > 15) {
    standardRate = 2
}

const totalRate = standardPay * minimumHours * standardRate

console.log(`Your gaji this month is: ${totalRate}`)
