// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example

const { LinkedList } = require("./linkedlist");


function midpoint(list) {
    if (!list.head) return;
    if (!list.head.next) return list.head;
    let slowNode = list.head; 
    let fastNode = list.head; 
    while (fastNode.next) {
        fastNode = fastNode.next;
        if (fastNode.next) {
            slowNode = slowNode.next;
            fastNode = fastNode.next;
        }
    }
    return slowNode;
}

  const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
console.log(midpoint(l)); // returns { data: 'b' }

module.exports = midpoint;
