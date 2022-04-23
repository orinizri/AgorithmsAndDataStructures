// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let widths = [0];
    let array = [root, 's'];
    while (array.length > 1) {
        let node = array.shift()
        if (node === 's') {
            array.push('s')
            widths.push(0)
        }
        widths[widths.length - 1]++
        array.push(...node.children)
    }
    return widths
}

module.exports = levelWidth;
