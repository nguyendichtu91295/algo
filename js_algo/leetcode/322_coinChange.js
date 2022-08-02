// https://leetcode.com/problems/coin-change/

const coinChange = (coins, amount) => {
    // using dynamic programming
    const dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];

            if (coin > i) {
                continue
            }

            dp[i] = Math.min(dp[i], 1 + dp[i - coin])
        }
    }

    return dp[amount] !== Infinity ? dp[amount] : -1
};

const run = () => {
//   const result = coinChange([1,2,5], 11); // 3
//   const result = coinChange([1], 0); // 3
  const result = coinChange([474,83,404,3], 264); // 8

  console.log(result);
};

export default run;
