// https://leetcode.com/problems/lru-cache/

const Node = function (key, value) {
    this.value = value
    this.key = key
    this.next = null
    this.prev = null
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    clearList() {
        this.tail = null
        this.head = null
        this.length = 0
    }

    push(newNode) {
        if (this.length) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }

        this.length += 1

        return this
    }

    pop() {
        if (!this.length) {
            return
        }
        const removedNode = this.tail

        if (this.length === 1) {
            this.clearList()
        } else {
            this.tail = removedNode.prev
            this.tail.next = null
            this.length -= 1
        }

        return removedNode
    }

    shift() {
        if (!this.length) {
            return
        }

        const removedNode = this.head

        if (this.length === 1) {
            this.clearList()
        } else {
            this.head = removedNode.next
            this.length -= 1
        }

        return removedNode
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null
        }

        let result = this.head
        let i = 0
        while (result !== null) {
            if (i === index) {
                break
            }

            if (result.next) {
                result = result.next
            }
            i++
        }

        return result
    }

    set(index, value) {
        if (index > this.length || index < 0) {
            return false
        }

        if (index === this.length) {
            this.push(value)
            return true
        }

        const node = this.get(index)

        if (node) {
            node.value = value
            return true
        }

        return false
    }

    remove(index) {
        if (index > this.length) {
            return
        }

        if (index === 0) {
            this.shift()
            return
        }

        if (index === this.length) {
            this.pop()
            return
        }

        const node = this.get(index)

        if (node) {
            node.prev.next = node.next
            node.next.prev = node.prev

            this.length -= 1
        }
    }

    swapTail(node) {
        if (this.length <= 1) {
            return null
        }

        const { prev, next } = node

		if (node === this.head) {
			this.head = next
			this.head.next = node
		}

		if (node === this.tail) {
			return
		}

		if (prev) {
			prev.next = next
		}

		if (next) {
			next.prev = prev
		}

        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.tail.next = null
    }
}

const LRUCache = function (capacity) {
    this.capacity = capacity
    this.storage = {}
    this.dll = new DoublyLinkedList()
}

LRUCache.prototype.get = function (key) {
    const result = this.storage[key]

    if (result === undefined) {
        return -1
    }

    // update LRU order?
	this.dll.swapTail(result)

    return result.value
}

LRUCache.prototype.put = function (key, value) {
    let node = this.storage[key]

    if (node) {
        // check LRU order
        node.value = value

        this.dll.swapTail(node)
        return null
    }

    if (this.dll.length === this.capacity) {
        // remove LRU item && append new key
        const lruItem = this.dll.head
        delete this.storage[lruItem.key]
        this.dll.shift()
    }

    node = new Node(key, value)
    this.storage[key] = node

    this.dll.push(node)
}

const run = () => {
// 	["LRUCache","put","put","get","get","put","get","get","get"]
//   [[2],[2,1],[3,2],[3],[2],[4,3],[2],[3],[4]]
    const lRUCache = new LRUCache(2)

    let result = lRUCache.put(2, 1) // cache is {1=1}
    result = lRUCache.put(3, 1) // cache is {1=1, 2=2}
    result = lRUCache.get(3) // return 1
    result = lRUCache.get(2) // returns -1 (not found)
    result = lRUCache.put(4, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    result = lRUCache.get(2) // return -1 (not found)
    result = lRUCache.get(3) // return 3
    result = lRUCache.get(4) // return 4
    // const result = canConstruct('a', 'b')
    console.log(result)
}

export default run
