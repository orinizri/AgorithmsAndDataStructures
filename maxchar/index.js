// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    const dict = {};
    str = str.split('');
    
    for (let char_index in str) {
        if (str[char_index] in dict) {
            dict[str[char_index]] += 1;
        } else {
            dict[str[char_index]] = 1;
        }
    }
    const highestVal = Math.max.apply(null, Object.values(dict)),
    val = Object.keys(dict).find(function(a) {
        return dict[a] === highestVal;
    });
    return val
}

function maxChar2(str) {
    const dict = {};
    str = str.split('');
    
    for (let char of str) {
        if (!dict[char]) {
            dict[char] = 1;
        } else {
            dict[char]++;
        }
    }
    const highestVal = Math.max.apply(null, Object.values(dict)),
    val = Object.keys(dict).find(function(a) {
        return dict[a] === highestVal;
    });
    return val
}

function maxChar3(str) {
    const dict = {}
    str = str.split('')
    for (let char of str) {
            dict[char] = dict[char] + 1 || 1 
    }
    const highestVal = Math.max.apply(null, Object.values(dict)),
    val = Object.keys(dict).find(function(a) {
        return dict[a] === highestVal;
    });
    return val
}
console.log(maxChar3('abbccc111111'));



module.exports = maxChar, maxChar2, maxChar3;
