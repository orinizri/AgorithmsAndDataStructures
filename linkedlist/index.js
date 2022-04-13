// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
    
    
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(data) {
        if (this.head) {
            let temp = this.head
            this.head = new Node(data, temp);
        } else {
            this.head = new Node(data);
        }
        return this.head
    }
}

let l = new LinkedList();
l.head = new Node("first");
console.log(l);
console.log(l.insertFirst(10))
// let n = new Node("second", first)


module.exports = { Node, LinkedList };
