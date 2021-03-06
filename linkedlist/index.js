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
        this.head = null;
    }
    insertFirst(data) { // or insertAt(0)
        this.head = new Node(data, this.head);
        return this.head;
    }
    size() {
        let counter = 0;
        while (this.head) {
            counter++;
            this.head = this.head.next;
        }
        return counter;
    }
    getFirst() { // or getAt(0)
        return this.head;
    }
    getLast() { // or getAt(this.size() - 1)
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }
    clearList() {
        this.head = null;
        return this.head;
    }
    removeFirst() { // or removeAt(0)
        if (!this.head) return;
        this.head = this.head.next;
        return this.head;
    }
    removeLast() { // or removeAt(this.size() - 1)
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return this.head;
        }
        let prevNode = this.head;
        let node = this.head.next;
        while (node.next) {
            prevNode = node;
            node = node.next;
        }
        prevNode.next = null;
        return node;
    }
    insertLast(data) { // or insertAt(this.size() - 1)
        let lastNode = this.getLast();
        if (!lastNode) {
            this.head = new Node(data);
            return this.head;
        }
        lastNode.next =  new Node(data);
        return newNode;
    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) return node;
            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) return;
        if (prevNode.next.next) {
            prevNode.next = prevNode.next.next
            return;
        }
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data, this.head);
        };
        if (index === 0) {
            this.head = new Node(data, this.head)
            return this.head
        };
        const prevNode = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prevNode)
        prevNode.next = node;
    }
}
let l = new LinkedList();
l.head = new Node("3");
l.head = new Node("2", l.head);
l.insertFirst("1")
l.insertFirst("0")
console.log("list before", l);
l.insertAt('Hello', 5);
console.log("list after", l.head.next.next.next);


module.exports = { Node, LinkedList };
