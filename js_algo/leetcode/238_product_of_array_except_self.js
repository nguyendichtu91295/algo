const productExceptSelfWithoutSpaceOptimized = (nums) => {
    /*
        using prefix + suffix to calculate
    */

    const prefix = []
    const suffix = []
    const result = []

    nums.reduce((previousValue, currentValue, currentIndex) => {
        if (currentIndex === 0) {
            prefix.push(previousValue)
            return previousValue
        }

        prefix.push(previousValue * currentValue)
        return previousValue * currentValue
    }, nums[0])

    nums.forEach((item, index) => {
        const reversedIndex = nums.length - index - 1
        const reversedItem = nums[reversedIndex]


        if (reversedIndex === nums.length - 1) {
            suffix[reversedIndex] = reversedItem
            return
        }

        suffix[reversedIndex] = reversedItem * suffix[reversedIndex + 1]
    })

    nums.forEach((item, index) => {
        const prefixItem = prefix[index - 1] === undefined ? 1 : prefix[index - 1]
        const suffixItem = suffix[index + 1] === undefined ? 1 : suffix[index + 1]

        result.push(prefixItem * suffixItem)
    })

    return result
}

const productExceptSelf = (nums) => {
    const result = []
    let currentPrefixSuffix = 1;

    nums.forEach((item, index) => {
        if (index === 0) {
            result.push(1)
            currentPrefixSuffix *= item
            return
        }

        result.push(currentPrefixSuffix)
        currentPrefixSuffix *= item
    })

    nums.forEach((item, index) => {
        const reversedIndex = nums.length - index - 1
        const reversedItem = nums[reversedIndex]

        if (reversedIndex === nums.length - 1) {
            currentPrefixSuffix = reversedItem
            return
        }

        result[reversedIndex] *= currentPrefixSuffix
        currentPrefixSuffix *= reversedItem
    })

    return result
}

const run = () => {
    // const data = [1,2,3,4]
    const data = [-1,1,0,-3,3]
    // const result = productExceptSelfWithoutSpaceOptimized(data)
    const result = productExceptSelf(data)

    console.log(result)
}

export default run
