// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function buildCharMap(str) {
    let dict = {}
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        dict[char] = dict[char] + 1 || 1;
    }
    return dict
}
function anagrams2(stringA, stringB) {
    mapA = buildCharMap(stringA)
    mapB = buildCharMap(stringB)
    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false
    }
    for (let key in mapA) {
        if (mapA[key] !== mapB[key]) {
            return false
        }
    }
    return true
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

console.log(anagrams('!RAIL!!','lair'));

module.exports = anagrams;
