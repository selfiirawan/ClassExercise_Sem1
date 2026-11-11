const array = [10, 20, 30, 40, 50]

const anObject = {
    a: 10,
    b: 20,
    c: "a string",
    d: [50, 60, 70]
}

const anotherArray = [
    anObject,
    {
        id: 101,
        name: "check"
    },
    {
        oID: 102,
        name: "this"
    },
    [
        304,
        "out"
    ]
]

console.log(anotherArray[3][0])