/*
    left item: 2n + 1
    rigth item: 2n + 2

    find parent: Floor((n - 1) / 2)
*/ 

// MaxHeap
class Heap {
    constructor() {
        this.list = [70, 67, 65, 45, 58, 40, 53, 44, 15, 31];
    }

    insert(value) {
        if (value === undefined) {
            return this.list;
        }

        this.list.push(value);
        let position = this.list.length - 1;
        let parent = -1;

        const bubbleUp = () => {
            parent = Math.floor((position - 1) / 2);

            if (parent < 0) {
                return this.list;
            }
           
            if (this.list[position] > this.list[parent]) {
                // swap
                let temp = this.list[position];
                this.list[position] = this.list[parent];
                this.list[parent] = temp;
                position = parent;
                return bubbleUp();
            }

            return this.list;
        }

        return bubbleUp()
    }

    extract() {
        const removedElement = this.list.shift();

        if (this.list.length <= 1) {
            return removedElement;
        }

        const lastItem = this.list.pop()
        this.list.unshift(lastItem);
        let position = 0;

        const bubbleDown = () => {
            let left = 2 * position + 1;
            let right = 2 * position + 2;
            let max;
            if (left >= this.list.length) {
                return removedElement;
            }

            if (right >= this.list.length) {
                max = left;
            } else if (this.list[left] > this.list[right]) {
               max = left;
            } else {
                max = right;
            }

            if (this.list[position] < this.list[max]) {
                let temp = this.list[position];
                this.list[position] = this.list[max];
                this.list[max] = temp;
                position = max;
                return bubbleDown();
            }

            return removedElement();
        }

        return bubbleDown();
    }
}

let heap = new Heap();
