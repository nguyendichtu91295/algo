// https://leetcode.com/problems/min-stack/

class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(value) {
        if (!this.stack.length) {
            this.stack.push(value)
            this.minStack.push(value)
        } else {
            this.stack.push(value)
            if (this.minStack[this.minStack.length - 1] > value) {
                this.minStack.push(value)
            } else {
                this.minStack.push(this.minStack[this.minStack.length - 1])
            }
        }
    }

    pop() {
        if (this.stack.length) {
            this.stack.pop()
            this.minStack.pop()
        }
    }

    top() {
        if (this.stack.length) {
            return this.stack[this.stack.length - 1]
        }
    }

    getMin() {
        if (this.stack.length) {
            return this.minStack[this.stack.length - 1]
        }
    }
}

const run = () => {
    const minStack = new MinStack()
    console.log(minStack.push(-2))
    console.log(minStack.push(0))
    console.log(minStack.push(-3))
    console.log(minStack.getMin())
    console.log(minStack.pop())
    console.log(minStack.top())
    console.log(minStack.getMin())
}

export default run
