// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }
    add(num) {
        this.data.push(num);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
const s = new Stack()
s.add(3)
s.add(4)
s.add(5)
console.log(s.remove())
console.log(s.remove())

module.exports = Stack;
