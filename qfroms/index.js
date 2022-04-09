// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// 1, 2 => return 1 => return 2 

class Queue {
    constructor() {
        this.s = new Stack();
        this.s2 = new Stack();
    }
    add(num) {
            this.s.push(num);
    }
    remove() {
        if (this.s.data.length === 1) return this.s.pop()
        while (this.s.data.length > 1) {
            let last_in_stack = this.s.data.pop();
            this.s2.data.push(last_in_stack);
        }
        const removed = this.s.pop()
        while (this.s2.data.length > 0) {
            let last_in_stack = this.s2.data.pop();
            this.s.data.push(last_in_stack);
        }
        return removed;
    }
    peek() {
        return this.s.data[0];
    }

}
const q = new Queue(); // 1, 2 => 2 
q.add(1);
q.add(2);
console.log(q)
console.log(q.peek());  // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2

module.exports = Queue;
