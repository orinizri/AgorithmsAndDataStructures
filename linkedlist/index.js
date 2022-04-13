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
        this.head = new Node(data, this.head);
        return this.head
    }
    size() {
        let counter = 0;
        while (this.head) {
            counter++
            this.head = this.head.next
        }
        return counter
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let node = this.head
        while (node.next) {
            node = node.next;
        }
        return node;
    }
    removeFirst() {
        this.head = this.head.next;
        return this.head
    }
}

let l = new LinkedList();
l.head = new Node("first");
l.head = new Node("second", l.head);
console.log(l.insertFirst(10))
console.log(l);
console.log(l.removeFirst());

// let n = new Node("second", first)


module.exports = { Node, LinkedList };
