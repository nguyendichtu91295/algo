// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = Infinity;
    let currentProfit = 0;
    let profit = 0;
    
    let buyDate = 0;
    let sellDate = 0;
    let buyIndex = 0;
    let sellIndex = 0;
    
    while (buyIndex < prices.length) {
        // find buyPrice
        if (prices[buyIndex] < buyPrice) {
            buyDate = buyIndex;
            buyPrice = prices[buyIndex];
            
            // find sellPrice
            sellIndex = buyIndex + 1;
            
            while(sellIndex < prices.length) {
                if (prices[sellIndex] > buyPrice) {
                    // test for current profit
                    currentProfit = prices[sellIndex] - buyPrice;
                    
                    if (currentProfit > profit) {
                        profit = currentProfit;
                        sellDate = sellIndex;
                    }
                }
                
                sellIndex++;
            }
        }
        
        buyIndex++;
    }
    
    return profit;
};

var maxProfitV2 = function(prices) {
    let min = Infinity;
    let max = 0;
    let profit = 0;
    
    prices.forEach(item => {
        if (item < min) {
            min = item
            max = 0;
        } else if (item > max) {
            max = item
            
            if (max - min > profit) {
                profit = max - min;
            }
        }
    })
    
    return profit;
};

maxProfit([7,1,5,3,6,4]);