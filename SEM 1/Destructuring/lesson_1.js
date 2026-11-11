// === DESTRUCTURING ===

// const students = {
//     name: "James",
//     age: 18
// };

// console.log(students.name);

function studentsInfo(obj) {
  return obj.name + ", " + obj.age;
}

// console.log(studentsInfo(students));  

function getStudent() {
    const name = "John";
    const age = 25;
    const grade = 90;

    return {name, age, grade};
}

const student = getStudent();
// const name = student.name;

const {name, age, grade} = getStudent();

// console.log(student);
// console.log(student.grade);

// console.log(age);

function getBook() {
    return {title: "Harry Potter", author: "JK Rowling", pages: 309};
}

const {title, author} = getBook();
// console.log(`${title}\n${author}`);


// === DESTRUCTURING ARRAY ===
function getCoordinates() {
    return [3, 6, 9];
}

const num = getCoordinates();
const [x, y, z] = num;
console.log(x, z);