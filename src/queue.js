const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.headQueue = null;
  }

  getUnderlyingList() {
    return this.headQueue;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
      if(!this.headQueue){
        this.headQueue = newNode;
      } else {
        let endNode = this.headQueue;
        while(endNode.next){
            endNode = endNode.next;
        }
        endNode.next = newNode;
      }
  }

  dequeue() {
    if(!this.headQueue){
      return;
    } 
    let firstNode = this.headQueue;
    this.headQueue = this.headQueue.next;
    return firstNode.value;
  }
}

module.exports = {
  Queue
};
