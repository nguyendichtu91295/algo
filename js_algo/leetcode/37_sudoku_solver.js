// https://leetcode.com/problems/sudoku-solver/

const checkInGrid = (board, row, col, val) => {
    const gridRow = Math.floor(row / 3)
    const gridCol = Math.floor(col / 3)

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[gridRow * 3 + r][gridCol * 3 + c] === val) {
                return true
            }
        }
    }

    return false
}

const checkHorizontal = (board, row, val) => {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === val) {
            return true
        }
    }
    return false
}

const checkVertical = (board, col, val) => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === val) {
            return true
        }
    }
    return false
}

const checkIsEmpty = (board, row, col) => {
    if (board[row][col] === '.') {
        return true
    }
    return false
}

const solveSudoku = (board) => {
    // const result = [...board]
    // const exist = loadExist(board)

    const helper = (row = 0, col = 0) => {
        if (col === 9) {
            col = 0
            row++
        }

        if (row === 9) {
            return true
        }

        if (!checkIsEmpty(board, row, col)) {
            return helper(row, col + 1)
        }

        for (let i = 1; i <= 9; i++) {
            const iToString = i.toString()
            if (
                checkInGrid(board, row, col, iToString) ||
                checkVertical(board, col, iToString) ||
                checkHorizontal(board, row, iToString)
            ) {
                continue
            }

            board[row][col] = iToString

            if (helper(row, col + 1)) {
                return true
            }

            board[row][col] = '.'
        }

        return false
    }

    helper()

    return board
}

const run = () => {
    const board = [
        ['.', '8', '.', '.', '.', '.', '2', '.', '.'],
        ['.', '.', '.', '.', '8', '4', '.', '9', '.'],
        ['.', '.', '6', '3', '2', '.', '.', '1', '.'],

        ['.', '9', '7', '.', '.', '.', '.', '8', '.'],
        ['8', '.', '.', '9', '.', '3', '.', '.', '2'],
        ['.', '1', '.', '.', '.', '.', '9', '5', '.'],

        ['.', '7', '.', '.', '4', '5', '8', '.', '.'],
        ['.', '3', '.', '7', '1', '.', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '.', '.', '4', '.']
    ]
    const result = solveSudoku(board)

    console.log(result)
}

export default run
