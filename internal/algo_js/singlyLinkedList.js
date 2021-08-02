class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let prev = this.head;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        this.length--;
        this.tail = prev;
        this.tail.next = null;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head)
            return undefined;
        this.length -= 1;
        const returnedValue = this.head;
        this.head = this.head.next
        if (!this.length)
            this.tail = null;
        return returnedValue;
    }

    unshift(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length += 1;
        if (this.length === 1)
            this.tail = node;
        return this;
    }

    get(index) {
        if (index > this.length || index < 0) {
            return null;
        }

        let result = this.head;

        let i = 0;

        while (i < index) {
            result = result.next;
            i++
        }

        return result;
    }

    set(index, value) {
        const node = this.get(index);

        if (node === null) {
            return
        }

        node.value = value;
    }

    insert(index, value) {
        if (index > this.length || index < 0)
            return
        if (index === this.length)
            return this.push(value)
        if (index === 0)
            return this.unshift(value)
        const prevNode = this.get(index - 1);
        const newNode = new Node(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length += 1;
    }

    remove(index) {
        if (index >= this.length || index < 0) {
            return;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const node = this.get(index - 1);
        const deleteNode = node.next;

        node.next = deleteNode.next;

        this.length -= 1;

        return deleteNode;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        if (this.length <= 1) {
            return;
        }
        let currentNext = current.next;
        let leapNext = currentNext.next;
        current.next = null;
        while (currentNext !== null) {
            currentNext.next = current;
            current = currentNext;
            currentNext = leapNext;
            leapNext = currentNext ? currentNext.next : null;
        }
    }
}

let list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);
// list.push(4);
// list.push(5);
list.reverse();
console.log(list)
