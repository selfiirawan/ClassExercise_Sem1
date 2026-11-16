// // const numbers = [1, 2, 3, 4, 5];

// // const numSquare = numbers.map(num => num * num)
// // console.log(numSquare)

// // const newNum = numbers.filter(num => num > 2)
// // console.log(newNum)

// // const nums = numbers.forEach(num => console.log(num))

// // const num3 = numbers.find(n => n % 3 === 0)
// // console.log(num3)

// // const result = numbers.filter(num => num > 2).map(n => n * n)
// // console.log(result)

// // const books = [
// //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
// //   { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
// //   { title: '1984', author: 'George Orwell', ratings: 4.7 },
// //   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
// //   { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
// // ];

// // const highRate = books.filter(book => book.ratings > 4)
// // console.log(highRate)

// // const title = books.map(book => book.title)
// // console.log(title)

// // const findBook = books.find(book => book.title === "1984")
// // console.log(findBook)

// // const sortedBook = books.sort((a, b) => b.ratings - a.ratings)
// // console.log(sortedBook)

// // const highestRating = books.sort((a,b) => b.ratings - a.rating)
// // console.log(highestRating[0].title)

// // const student = {
// //     id: '101',
// //     name: 'John Doe',
// //     courses: ['Math', 'English', 'Science'],
// //     parents: {
// //         father: 'Mr. Doe',
// //         mother: 'Mrs. Doe'
// //     }
// // };

// // const { id, name, courses } = student
// // const { parents: {father, mother} } = student

// // console.log(id); // 101
// // console.log(name); // John Doe 
// // console.log(father); // Mr. Doe

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // const [ a, b, c, d, e, ...secondHalf ] = numbers
// // const firstHalf = [a, b, c, d, e]

// // console.log(firstHalf)
// // console.log(secondHalf)

// // const numbers = [ 1, 2, 3 ];

// // function sum(a, b, c) {
// //     return a + b + c;
// // }

// // console.log(sum(...numbers))

// const book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
//     publication: {
//         year: 1937,
//         publisher: 'George Allen & Unwin'
//     }
// };

// const { title, author, characters } = book
// const { publication: {year, publisher} } = book


// const obj1 = { a: 1, b: 2 };

// const obj2 = { c: 3, d: 4 };

// const obj3 = {...obj1, ...obj2}
// const obj4 = {...obj1}
// console.log(obj3)
// console.log(obj4)

const data = {
    numbers1: [1, 2, 3, 4],
    numbers2: [5, 6, 7, 8]
};

const { numbers1: array1, numbers2: array2 } = data

const array3 = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(array3)