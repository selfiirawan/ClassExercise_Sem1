function greet(callback) {
    console.log("Hello")
    callback(); // here we are calling back the function passed as an argument
}

/*
    - notice how 'Hello' will be output first, followed by what we 
    passed in as an argument below.

    - think of it essentially as calling an argument passed in as 
    a function, that is a callback
*/
greet(function sayName() {
    console.log("John Doe")
})


function outsideCalledFunction(passAFunctionHere) {
    console.log("This is the parent function")
    passAFunctionHere();
}

function childFunction1() {
    console.log("this is child 1")
}

function childFunction2() {
    console.log("This is child 2")
}

outsideCalledFunction(childFunction1)
outsideCalledFunction(childFunction2)