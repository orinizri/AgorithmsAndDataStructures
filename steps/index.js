// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let step = 0; step < n; step++) {
        let stepString = '';
        for (let sulamitIndex = 0; sulamitIndex <= step; sulamitIndex++) {
            stepString += '#'
        }
        for (let spaceIndex = 1; spaceIndex < n - step; spaceIndex++) {
            stepString += ' '
        }
        console.log(stepString)
    }
}

function steps2(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

function steps3(n, row = 0, stair = '') {
    if (n === row) return;
    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1)
    }
    if (stair.length <= row) {
        stair += '#';
        stair += ' ';
    }
    steps(n, row, stair)
}
console.log(steps3(3));

module.exports = steps;
