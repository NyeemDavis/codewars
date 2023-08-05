// Tic-Tac-Toe 3D
// Link: https://www.codewars.com/kata/5aa67541373c2e69a20000c9
// Problem: Tic-Tac Toe but o a 4x4x4 matrix
// Notes:
    // Return a string of the winner (0 wins afer <n> moves)
    // Player 0 always foes first
    // Input moves is a list/array/tuple of [x, y, z] (zero indexed)
    // Four of the same symbols in  a row wins
    // There may be more moves needed than necessary to win

// Checking for a win
const playOX3D = (moves) => {
    // Create a 4x4x4 matrix
    // First index is what matrix, then next two are or cords (board[0][0][0]) => top left pos in 1st matrix
    let board = Array.from({length: 4}, (matrix) => Array.from({length: 4}, (row) => Array.from({length: 4}, (space) => null)))

    // Loop through moves
        // Keeping track of whos turn it is
    for(let i = 0, turn = 'O'; i < moves.length; i++, turn = turn === 'O' ? 'X' : "O") {
        // Current board
        const currentBoard = moves[i][0]
        // X and Y cords in board
        const x = moves[i][1]
        const y = moves[i][2]

        // Put pick based on turn at the board and pick
        board[currentBoard][x][y] = turn

        // Find Winner
            // Find winner on 2D Plane first in each board
            // Find winner on 3D Plane second
                // Recursion lol
       
    } 
    return 
}

console.log(playOX3D([[0,0,0],
    [1,1,1],
    [2,2,2],
    [3,3,3]]))

const checkForWinner = (board) => {
    const rowsLength = board.length
    const colLength = board[0].length

    for(x = 0; x < rowsLength; x++) {
        for(y = 0; y < colLength; y++) {
            const current = board[x][y]
            
        }
    }
}