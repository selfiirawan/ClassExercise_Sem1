function concatenateStrings(strings) {
    let s = "";
    for (let i = 0; i < strings.length; i++) {
        s += strings[i];
    }
    return s;
}

console.log(concatenateStrings(["Hello", "World", "in", "JavaScript"]));