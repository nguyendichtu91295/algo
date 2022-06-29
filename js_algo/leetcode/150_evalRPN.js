// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const evalRPN = (tokens) => {
    const operator = {
        '+': 1,
        '-': 1,
        '*': 1,
        '/': 1
    }

    if (tokens.length === 1 && !operator[tokens[0]]) {
        return parseInt(tokens[0], 10)
    }

    const singleExpression = []

    for (let i = 0; i < tokens.length; i++) {
        const element = tokens[i]

        if (operator[element]) {
            const x = parseInt(singleExpression.pop(), 10)
            const y = parseInt(singleExpression.pop(), 10)
            let result = 0

            switch (element) {
                case '+':
                    result = y + x
                    break
                case '-':
                    result = y - x
                    break
                case '*':
                    result = y * x
                    break
                case '/':
                    result = y / x
                    break
                default:
                    break
            }
            result = result < 0 ? Math.ceil(result) : Math.floor(result)

            singleExpression.push(result.toString())

            continue
        }

        singleExpression.push(element)
    }

    return parseInt(singleExpression[0], 10)
}

const run = () => {
    // console.log(evalRPN(["2", "1", "+", "3", "*"]));
    // console.log(evalRPN(["4", "13", "5", "/", "+"]));
    // console.log(evalRPN(["4","-2","/","2","-3","-","-"]));
    console.log(evalRPN(['2', '1', '+', '3', '*']))
    // console.log(
    //     evalRPN([
    //         '10',
    //         '6',
    //         '9',
    //         '3',
    //         '+',
    //         '-11',
    //         '*',
    //         '/',
    //         '*',
    //         '17',
    //         '+',
    //         '5',
    //         '+'
    //     ])
    // )
}

export default run
