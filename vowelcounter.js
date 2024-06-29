// This code will count the number of vowels in a given word.

function vowelCounter(word) {
    let i = 0;
    let vowelCounter = 0;
    while (i < word.length) {
        let letter = word[i];
        if (letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u") {
                vowelCounter++;
            }
            i++;
    }
    return vowelCounter;

}

console.log(vowelCounter("imagination"));
console.log(vowelCounter("omelette"));
console.log(vowelCounter("egg"));
console.log(vowelCounter("hippopotamus"));
