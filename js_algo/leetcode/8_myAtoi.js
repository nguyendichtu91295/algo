// https://leetcode.com/problems/string-to-integer-atoi/

const myAtoi = (s) => {
    const nums = []
    let multiplier = 1
    let countMulitplier = 0

    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        const code = s.charCodeAt(i)

        if (c === '+' || c === '-') {
            if (nums.length) {
                break
            }

            countMulitplier += 1

            if (countMulitplier > 1) {
                return 0
            }

            if (c === '-') {
                multiplier = -1
            }
        }

        if (
            (code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122) ||
            c === '.' ||
            c === ' '
        ) {
            // A - Z and a - z and " " and "."

            if (!nums.length) {
                if (c === ' ' && !countMulitplier) {
                    // leading whitespace
                    continue
                }

                // leading char
                return 0
            }

            break
        }

        if (code >= 48 && code <= 57) {
            // 0 - 9
            nums.push(c)
        }
    }

    // convert number
    let result = 0
    let position = 1

    while (nums.length) {
        const element = parseInt(nums.pop(), 10)
        result += element * position

        position *= 10
    }

    result *= multiplier

    if (result > 2 ** 31 - 1) {
        result = 2 ** 31 - 1
    }

    if (result < -(2 ** 31)) {
        result = -(2 ** 31)
    }


    return result
}

const run = () => {
    // const result = myAtoi('-2147483649')
    // const result = myAtoi('-91283472332')
    // const result = myAtoi("00000-42a1234")
    const result = myAtoi("  +  413")

    console.log(result)
}

export default run
