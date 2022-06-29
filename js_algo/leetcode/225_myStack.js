// https://leetcode.com/problems/implement-stack-using-queues/
import MyQueue from '/utils/queue'

class MyStack {
    constructor() {
        this.queue = new MyQueue()
    }

    push(x) {
        this.queue.enqueue(x)
    }

    pop() {
        let length = this.queue.length()
        let prev = null
    
        while (length !== 1) {
            prev = this.queue.dequeue()
            this.queue.enqueue(prev)
    
            length--
        }
    
        return this.queue.dequeue()
    }

    top() {
        let length = this.queue.length()
        let prev = null
    
        while (length !== 0) {
            prev = this.queue.dequeue()
            this.queue.enqueue(prev)
            length--
        }
    
        return prev
    }

    empty() {
        return this.queue.isEmpty()
    }
}

const run = () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    console.log(myStack.top()) // return 2
    console.log(myStack.pop()) // return 2
    console.log(myStack.empty()) // return False
}

export default run
