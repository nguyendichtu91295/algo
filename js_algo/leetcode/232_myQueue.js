// https://leetcode.com/problems/implement-queue-using-stacks/
import MyStack from '/utils/stack'

class MyQueue {
    constructor() {
        this.stack1 = new MyStack()
        this.stack2 = new MyStack()
    }

    push(x) {
        this.stack1.push(x)
    }

    pop() {
        if (this.stack2.length()) {
            return this.stack2.pop()
        }

        while (this.stack1.length()) {
            this.stack2.push(this.stack1.pop())
        }

        return this.stack2.pop()
    }

    peek() {
        if (this.stack2.length()) {
            return this.stack2.peek()
        }

        while (this.stack1.length()) {
            this.stack2.push(this.stack1.pop())
        }

        return this.stack2.peek()
    }

    empty() {
        return this.stack1.isEmpty() && this.stack2.isEmpty()
    }
}

const run = () => {
    const myQueue = new MyQueue()
    console.log(myQueue.push(1)) // queue is: [1]
    console.log(myQueue.push(2)) // queue is: [1, 2] (leftmost is front of the queue)
    console.log(myQueue.peek()) // return 1
    console.log(myQueue.pop()) // return 1, queue is [2]
    console.log(myQueue.empty()) // return false
}

export default run
