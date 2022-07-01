// https://leetcode.com/problems/basic-calculator/

const calculate = (s) => {
    let i = 0

    const evalExpression = () => {
        let sum = 0
        let sym = s[i]
        let operator = 1

        while (i < s.length) {
            sym = s[i]

            if (Number.isInteger(parseInt(sym, 10))) {
                let fullVal = ''
                while (i < s.length && Number.isInteger(parseInt(sym, 10))) {
                    fullVal = `${fullVal}${sym}`

                    i++
                    sym = s[i]
                }

                i--

                sum += operator * parseInt(fullVal, 10)
            } else if (sym === '-') {
                operator = -1
            } else if (sym === '+') {
                operator = 1
            } else if (sym === '(') {
                i++
                sum += operator * evalExpression()
            } else if (sym === ')') {
                break
            }

            i++
        }

        return sum
    }

    return evalExpression(s)
}

const run = () => {
    const result = calculate('1 +- 1')
    // const result = calculate(' 2-1 + 2 ')
    // const result = calculate('(1+(4+5+2)-3)+(6+8)') // 23
    // const result = calculate('2147483647')
    // const result = calculate('-1 + 1') // 0
    // const result = calculate('- (3 + (4 + 5))') // -12
    // const result = calculate('1-(-2)') // 3

    console.log(result)
}

export default run
