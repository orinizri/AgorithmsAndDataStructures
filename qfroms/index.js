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
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    add(record) {
        this.refill(this.stack2, this.stack1);
        this.stack1.push(record);
        this.refill(this.stack1, this.stack2);
    }
    peek() {
        return this.stack2.peek();
    }
    remove() {
        return this.stack2.pop();
    }

    refill(source, destination) {
        while (source.peek()) {
            destination.push(source.pop());
        }
    }
}

const q = new Queue(); 
q.add(1);
q.add(2);
console.log(q)
console.log(q.peek());  // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2

module.exports = Queue;
