// https://leetcode.com/problems/design-circular-queue/

class MyCircularQueue {
    constructor(k) {
        this.length = 0
        this.limit = k
        this.read = 0
        this.write = 0
        this.list = new Array(this.limit).fill(-1)
    }

    enQueue(x) {
        if (this.length === this.limit) {
            return false
        }

        if (this.length > 0) {
			if (this.write === this.limit - 1) {
				this.write = 0
			} else {
				this.write++
			}
        }


        this.list[this.write] = x
        this.length++

        return true
    }

    deQueue() {
        if (this.length === 0) {
            return false
        }

        this.list[this.read] = -1

        if (this.length > 1) {
            if (this.read === this.limit - 1) {
                this.read = 0
            } else {
                this.read++
            }
        }

        this.length--
        return true
    }

    Front() {
        return this.list[this.read]
    }

    Rear() {
        return this.list[this.write]
    }

    isEmpty() {
        return this.length === 0
    }

    isFull() {
        return this.length === this.limit
    }
}

const run = () => {
    // // ["MyCircularQueue","enQueue","Rear","Rear","deQueue","enQueue","Rear","deQueue","Front","deQueue","deQueue","deQueue"]
    // // [[6],[6],[],[],[],[5],[],[],[],[],[],[]]
    const myCircularQueue = new MyCircularQueue(6)
    console.log(myCircularQueue.enQueue(6))
    console.log(myCircularQueue.Rear())
    console.log(myCircularQueue.Rear())
    console.log(myCircularQueue.deQueue())
    console.log(myCircularQueue.enQueue(5))
    console.log(myCircularQueue.Rear())
    console.log(myCircularQueue.deQueue())
    console.log(myCircularQueue.Front())
    console.log(myCircularQueue.deQueue())
    console.log(myCircularQueue.deQueue())
    console.log(myCircularQueue.deQueue())

	// ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","deQueue","deQueue","isEmpty","isEmpty","Rear","Rear","deQueue"]
	// [[8],[3],[9],[5],[0],[],[],[],[],[],[],[]]
    // const myCircularQueue = new MyCircularQueue(8)
    // console.log(myCircularQueue.enQueue(3))
    // console.log(myCircularQueue.enQueue(9))
    // console.log(myCircularQueue.enQueue(5))
    // console.log(myCircularQueue.enQueue(0))
    // console.log(myCircularQueue.deQueue())
    // console.log(myCircularQueue.deQueue())
    // console.log(myCircularQueue.isEmpty())
    // console.log(myCircularQueue.isEmpty())
    // console.log(myCircularQueue.Rear())
    // console.log(myCircularQueue.Rear())
    // console.log(myCircularQueue.deQueue())
}

export default run
