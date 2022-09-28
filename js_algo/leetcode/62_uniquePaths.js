// https://leetcode.com/problems/unique-paths/

const uniquePaths = (m, n) => {
    const ans = []

    for (let i = 0; i < m; i++) {
        if (!ans[i]) {
            ans.push([])
        }

        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                ans[i].push(1)
            } else {
                ans[i][j] = ans[i - 1][j] + ans[i][j - 1]
            }
        }
    }

    return ans[m - 1][n - 1]
}

const run = () => {
    const result = uniquePaths(3, 7)

    console.log(result)
}

export default run
