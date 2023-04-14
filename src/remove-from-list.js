const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // If the list is empty, return null
  if (!l) {
    return null;
  }
  let dummy = new ListNode(null); // Create a dummy node as a placeholder
  let tail = dummy; // Initialize the tail of the new list with the dummy node

  while (l) {
    if (l.value !== k) {
      // If the current node's value is not equal to k, create a new node with the same value
      // and append it to the tail of the new list
      tail.next = new ListNode(l.value);
      tail = tail.next; // Move the tail to the newly appended node
    }
    l = l.next; // Move to the next node in the original list
  }

  return dummy.next; // Return the head of the new list (skip the dummy node)
}

module.exports = {
  removeKFromList
};
