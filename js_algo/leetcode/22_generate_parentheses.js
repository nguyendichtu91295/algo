// https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = (n) => {
    const result = []

    const helper = (current = '', open = 0, close = 0) => {
        if (current.length === n * 2) {
            result.push(current)
            return
        }

		if (open < n) {
            helper((`${current}(`), open+1, close)
        }

		if (close < open) {
			helper((`${current})`), open, close+1)
		}
    }

    helper()

    return result
}

const run = () => {
    const result = generateParenthesis(3)

    console.log(result)
}

export default run
