// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples

const { LinkedList } = require("./linkedlist");


function fromLast(list, n) {
    let fast = list.head;
    let slow = list.head;
    let counter = 0;
    while (fast.next) {
        fast = fast.next;
        counter++;
    }
    for (let i = 0 ; i < counter - n ; i++) {
        slow = slow.next;
    }
    return slow
}
function fromLast2(list, n) {
    let fast = list.head;
    let slow = list.head;
    for (let i=0 ; i < n ; i++) {
        fast = fast.next
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow
}

   const list = new LinkedList();
   list.insertLast('a');
   list.insertLast('b');
   list.insertLast('c');
   list.insertLast('d');
   console.log(fromLast2(list, 2).data) // 'b'

module.exports = fromLast;
