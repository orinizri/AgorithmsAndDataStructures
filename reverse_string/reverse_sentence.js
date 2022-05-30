// Given a string s, reverse the order of characters in each word within a sentence while still 
// preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

const reverseWords = (s) => {
        s = s.split(' ')
        for (let word = 0; word < s.length; word++) {
            s[word] = reverse(s[word])
        } 
        return s.join(' ')
}


function reverse(word) {
    word = word.split('')
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
        const leftTemp = word[left]
        word[left] = word[right]
        word[right] = leftTemp
    }
    return word.join('')
}


console.log(reverseWords("Let's take LeetCode contest"))