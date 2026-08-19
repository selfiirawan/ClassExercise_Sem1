function countSpecificLetterFrequency(letters, specificLetter) {
    let length = 0;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === specificLetter) {
            length++;
        }
    }
    return length;
}

console.log(countSpecificLetterFrequency(['a', 'b', 'a', 'c', 'b', 'a', 'd'], 'a'));

