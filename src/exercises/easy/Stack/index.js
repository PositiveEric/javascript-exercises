/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  constructor() {
    this.data = [];
  }
  // Add items to the end of an array
  push(item) {
    this.data.push(item);
  }
  // Remove an item from the end of an array
  pop() {
    return this.data.pop();
  }
  // Shows the last element
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;