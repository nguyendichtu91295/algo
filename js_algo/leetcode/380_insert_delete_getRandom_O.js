// https://leetcode.com/problems/ransom-note/


function RandomizedSet() {
	this.list = []
	this.object = {}
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.object[val] !== undefined) {
		return false
	}

	this.list.push(val)
	this.object[val] = this.list.length - 1
	return true
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (this.object[val] === undefined) {
		return false
	}

	const index = this.object[val]
	const swapVal = this.list[this.list.length - 1]

	this.object[swapVal] = index

	const temp = this.list[index]
	this.list[index] = swapVal
	this.list[this.list.length - 1] = temp
	delete this.object[val]

	this.list.pop()

	return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
	const randomIndex = Math.floor(Math.random() * (this.list.length - 1 - 0)) + 0

	return this.list[randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const run = () => {
    const obj = new RandomizedSet()
	let result = obj.insert(1)
	result = obj.remove(2)
	result = obj.insert(2)
	result = obj.getRandom()
	result = obj.remove(1)
	result = obj.insert(2)
	result = obj.getRandom()

	// [null, true, false, true, 2, true, false, 2]

    console.log(result)
}

export default run
