// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh' 
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}
function reverse2(str) {
    let reversed = ''
    for (let index in str) {
        reversed = str[index] + reversed
    }
    return reversed
}
function reverse3(str) {
    return str.split('').str.reduce((accumulator, currentValue) => currentValue + accumulator);
}
function reverse4(str) {
    let l = 0;
    let r = s.length - 1
    while (l < r) {
        let leftLetter = s[l];
        str[l] = str[r];
        str[r] = leftLetter
        l++
        r--
    }
    return str
}
function reverse_recursion(str) {
    // Base case
    if (str.length < 2) return str;
    // Recursive case
    return reverse_recursion(str.slice(1, str.length)) + str[0];
}
console.log(reverse_recursion('hello'))

module.exports = reverse;
