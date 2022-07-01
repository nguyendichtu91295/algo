// https://leetcode.com/problems/basic-calculator-ii/

const calculate = (s) => {
    const stack = []

    const operators = {
        '+': 1,
        '-': 1,
        '*': 1,
        '/': 1
    }

    let value = 0
    let operator = '+'

    for (let i = 0; i < s.length; i++) {
        let sym = s[i]

        if (Number.isInteger(parseInt(sym, 10))) {
            let fullVal = ''
            while (i < s.length && Number.isInteger(parseInt(sym, 10))) {
                fullVal = `${fullVal}${sym}`

                i++
                sym = s[i]
            }

            i--
            sym = s[i]

            value = parseInt(fullVal, 10)
        }

        if (operators[sym] || i === s.length - 1) {
            if (operator === '+') {
                stack.push(value)
            } else if (operator === '-') {
                stack.push(-value)
            } else if (operator === '*') {
                stack[stack.length - 1] *= value
            } else if (operator === '/') {
                stack[stack.length - 1] /= value

                if (stack[stack.length - 1] > 0) {
                    stack[stack.length - 1] = Math.floor(
                        stack[stack.length - 1]
                    )
                } else {
                    stack[stack.length - 1] = Math.ceil(stack[stack.length - 1])
                }
            }

            value = 0
            operator = sym
        }
    }

    let result = 0
    stack.forEach((item) => {
        result += item
    })
    return result
}

const run = () => {
    // const result = calculate('4-3*2')
    // const result = calculate('3+2*2')
    // const result = calculate(' 3/2 ')
    // const result = calculate(' 3+5 / 2 ')
    const result = calculate('13+2*2')

    console.log(result)
}

export default run
