// https://leetcode.com/problems/valid-parentheses

const isValid = (s) => {
    const stack = []

    let i = 0
    const openBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    while (i < s.length) {
        const sym = s[i]

        if (openBracket[sym]) {
            if (stack[stack.length - 1] !== openBracket[sym]) {
                return false
            }

            stack.pop()
        } else {
            stack.push(sym)
        }

        i++
    }

    return stack.length === 0
}

const run = () => {
    const result = isValid('()[]{}')
    // const result = isValid('(]')
    // const result = isValid('[{}]')

    console.log(result)
}

export default run
