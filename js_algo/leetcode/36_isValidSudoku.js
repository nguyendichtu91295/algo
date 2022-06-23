// https://leetcode.com/problems/valid-sudoku/

const isValidSudoku = (board) => {
    const GRID = 3

    for (let row = 0; row < GRID; row++) {
        for (let col = 0; col < GRID; col++) {
            const startRow = row * GRID
            const startCol = col * GRID
            const occurence = {}

            for (let subRow = startRow; subRow < startRow + GRID; subRow++) {
                for (
                    let subCol = startCol;
                    subCol < startCol + GRID;
                    subCol++
                ) {
                    if (board[subRow][subCol] !== '.') {
                        if (occurence[board[subRow][subCol]]) {
                            return false
                        }

                        occurence[board[subRow][subCol]] = 1
                    }
                }
            }

            // grid check
        }
    }

    for (let row = 0; row < GRID * 3; row++) {
        for (let col = 0; col < GRID * 3; col++) {
            if (board[row][col] !== '.') {
                // row check
                for (let i = row + 1; i < GRID * 3; i++) {
                    if (board[i][col] === board[row][col]) {
                        return false
                    }
                }

                // col check
                for (let i = col + 1; i < GRID * 3; i++) {
                    if (board[row][i] === board[row][col]) {
                        return false
                    }
                }
            }
        }
    }

    return true
}

const run = () => {
    // const result = isValidSudoku([
    //     ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    //     ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    //     ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    //     ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    //     ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    //     ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    //     ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    //     ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    //     ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    // ])
    const result = isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ])

    console.log(result)
}

export default run
