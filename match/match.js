// function text which verifies whther parentheses within test are correctly nested (consider () [] and <> only)


const isParenthesesMatching = (string) => {
    let openParentheses = [];
    // prepatre dict for open and close parentheses
    const parenthesesDict = {
        '(' : ')',
        '[':']',
        '<':'>'
    }
    // loop through string 
    for (let char of string.split('')) {
        // if open parentheses - add to queue
        if (Object.keys(parenthesesDict).includes(char)) {
            openParentheses.push(char)
        }
        // if closed parentheses - check if match to last paretheses in queue
        if (Object.values(parenthesesDict).includes(char) && openParentheses) {
            if (parenthesesDict[openParentheses[openParentheses.length - 1]] === char) {
                // if match - remove from queue
                openParentheses.pop()
            }
        }
    }
    return openParentheses.length === 0 
    


    // if not match return False

    // return True
}
console.log(isParenthesesMatching('()()()('))