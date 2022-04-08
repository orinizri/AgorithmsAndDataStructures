// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor(number) {
        this.queue = [];
        this.number = number;
    }
    
    add(number) {
        this.queue.unshift(number);
    }
    remove() {
        const removed = this.queue.pop();
        return removed;
    }
}

const newQueue = new Queue();
console.log(newQueue.add(5));
console.log(newQueue.add(10));
console.log(newQueue.add(15));
console.log(newQueue.remove());
console.log(newQueue.remove());
console.log(newQueue.remove());


module.exports = Queue;