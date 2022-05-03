// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
    let buyingDate = 0
    let optimalProfit = 0

    prices.forEach((value, i) => {
        if (value < prices[buyingDate]) {
            buyingDate = i
            return
        }

        const currentProfit = value - prices[buyingDate]

        if (currentProfit > optimalProfit) {
            optimalProfit = currentProfit
        }
    })

    return optimalProfit
}

const run = () => {
    // const result = maxProfit([7, 2, 6, 7, 8, 1, 6])
    // const result = maxProfit([7,1,5,3,6,4])
    const result = maxProfit([7,6,4,3,1])

    console.log(result)
}

export default run
