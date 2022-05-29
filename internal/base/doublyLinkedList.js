class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    clearList() {
        this.tail = null
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length += 1;

        return this;
    }

    pop() {
        if (!this.length) {
            return;
        }
        const removedNode = this.tail;

        if (this.length === 1) {
            this.clearList()
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            this.length -= 1;
        }

        return removedNode;
    }

    shift() {
        if (!this.length) {
            return;
        }

        const removedNode = this.head;

        if (this.length === 1) {
            this.clearList();
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            this.length -= 1;
        }

        return removedNode;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (this.length) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }

        let result = this.head;
        let i = 0;
        while (result !== null) {
            if (i === index) {
                break;
            }

            if (result.next) {
                result = result.next;
            }
            i++;
        }

        return result;
    }

    set(index, value) {
        if (index > this.length || index < 0) {
            return false;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        const node = this.get(index);

        if (node) {
            node.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index === 0) {
            this.unshift(value);
            return;
        }

        if (index >= this.length) {
            this.push(value);
            return;
        }

        const node = this.get(index);
        const prevNode = this.get(index - 1)
        if (node) {
            const newNode = new Node(value);

            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = node;
            node.prev = newNode;

            this.length += 1;
        }
    }

    remove(index) {
        if (index > this.length) {
            return;
        }

        if (index === 0) {
            this.shift();
            return;
        }

        if (index === this.length) {
            this.pop();
            return;
        }

        const node = this.get(index);

        if (node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;

            this.length -= 1;
        }
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next = current.next;
        let leap = next.next;

        while(next !== null) {


            current.prev = next;
            next.next = current;
            current = next;
            next = leap;
            if (next) {
                leap = next.next;
            }
        }

        this.head.prev = null;
        this.tail.next = null;

        return this;
    }
}


