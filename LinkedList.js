const _Node = require('./NodeClass')

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    // If the head is null, inserting at the "last" space, is really just the first / head
    if (!this.head) {
      this.head = new _Node(item, null);
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = new _Node(item, null);
    }
  }

  remove(item) {
    if (!this.head) {
      return false;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === item) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(item) {
    if (this.head === null) return null;
    if (this.head.value === item) return this.head;

    let current = this.head;

    while (current !== null) {
      if (current.value === item) {
        return current;
      } else current = current.next;
    }
    return null;
  }

  insertBefore(val, item) {
    let current = this.head.next;
    let previous = this.head;

    if (previous.value === item) {
      this.head = new _Node(item, this.head);
      return true;
    }

    while (current !== null) {
      if (current.value === item) {
        previous.next = new _Node(val, current);
        return true;
      }
      current = current.next;
      previous = previous.next;
    }
    return false;
  }

  insertAfter(val, item) {
    let current = this.head.next;
    let previous = this.head;

    if (previous.value === item) {
      previous.next = new _Node(item, previous.next);
      return true;
    }

    while (current !== null) {
      if (previous.value === item) {
        previous.next = new _Node(val, current);
        return true;
      }
      current = current.next;
      previous = previous.next;
    }
    return false;
  }

  insertAt(item, position) {
    let counter = 1;
    let current = this.head;

    while (current !== null) {
      if (counter === position - 1) {
        current.next = new _Node(item, current.next);
        return true;
      }
      current = current.next;
      counter++;
    }
    throw new Error('List is not long enough to insert item at that position');
  }
}
module.exports = LinkedList;