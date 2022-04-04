// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < n*2 -1 ; column++) {
            (column <= midpoint + row && column >= midpoint - row) ? level += '#' : level += ' ';
        }
        console.log(level);
    }
}
function pyramid2(n) {
    let midpoint = Math.floor((n*2 - 1) / 2)
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < n*2 -1 ; column++) {
            (column <= midpoint + row && column >= midpoint - row) ? level += '#' : level += ' ';
        }
        console.log(level);
    }
}
function pyramid3(n, row=0, column=0, level='') {
    let midpoint = Math.floor((n*2 - 1) / 2)
    if (n === row) return;
    if (column === n*2 - 1) {
        console.log(level)
        return pyramid3(n, row + 1)
    }
    column <= midpoint + row && column >= midpoint - row ? level += '#' : level += ' ';
    pyramid3(n, row, column + 1, level)
}

console.log(pyramid3(4));



module.exports = pyramid;
