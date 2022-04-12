// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node) {
        this.data = data;
        this.node = node;
    }
    
    
}
let first = new Node("first") 
let n = new Node("second", first)
console.log(n);

class LinkedList {}

module.exports = { Node, LinkedList };
