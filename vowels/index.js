// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelsCounter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            vowelsCounter ++;
        }
    }
    return vowelsCounter
}

function vowels2(str, counter=0) {
    if (str.length === 0) return counter;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.includes(str[str.length - 1].toLowerCase())) {
            counter ++;
        }
    str = str.slice(0,-1)
    return vowels2(str, counter)
}

console.log(vowels2('Hi There'));
module.exports = vowels;
