class TimeMap {
    constructor() {
        this.store = {}
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = []
        }

        this.store[key].push({ value, timestamp })
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store[key] || timestamp < this.store[key][0].timestamp) {
            return ''
        }

        const lastIndex = this.store[key].length - 1

        if (this.store[key].length === 1) {
            return this.store[key][0].value
        }

        let mid = 0
        let left = 0
        let right = lastIndex

        while (left < right) {
            mid = Math.floor((left + right) / 2)

            const { timestamp: midTime, value } = this.store[key][mid]

            if (timestamp === midTime) {
                return value
            }

            if (right - left === 1 && timestamp < this.store[key][right].timestamp && timestamp > this.store[key][left].timestamp) {
                return this.store[key][left].value
            }

            if (timestamp < midTime) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return  this.store[key][left].value
    }
}

const run = () => {
    const timeMap = new TimeMap() // null
    console.log(timeMap.set('love', 'high', 10)) // null
    console.log(timeMap.set('love', 'low', 20)) // null
    console.log(timeMap.get('love', 5)) // ""
    console.log(timeMap.get('love', 10)) // high
    console.log(timeMap.get('love', 15)) // high - low
    console.log(timeMap.get('love', 20)) // low
    console.log(timeMap.get('love', 25)) // low

    // const timeMap = new TimeMap()
    // console.log(timeMap.set('foo', 'bar', 1)) // store the key "foo" and value "bar" along with timestamp = 1.
    // console.log(timeMap.get('foo', 1)) // return "bar"
    // console.log(timeMap.get('foo', 3)) // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
    // console.log(timeMap.set('foo', 'bar2', 4)) // store the key "foo" and value "bar2" along with timestamp = 4.
    // console.log(timeMap.get('foo', 4)) // return "bar2"
    // console.log(timeMap.get('foo', 5)) // return "bar2"

    //   console.log(result);
}

export default run
