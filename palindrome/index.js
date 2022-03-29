// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').reverse().join('') === str
}
function palindrome2(str) {
    let reversed = ''
    for (let char in str) {
        reversed = (str[char]) + reversed
    }
    return reversed === str
}
function palindrome3(str, memo=null) {
        if (!memo) memo = str;
        if(str.length === 1) return true;
        if(str.length === 2) return str[0] === str[1];
        if(str[0] === str.slice(-1)) return palindrome3(str.slice(1,-1), memo)
        return false;
}
function palindrome4(str) { // less good bc checks twice every pair of characters
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1]
    })
}
// console.log(palindrome4("aba"));
module.exports = palindrome;
