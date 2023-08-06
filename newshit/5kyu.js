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
const directions = {
    // Rows
    leftAlongRow: [0, -1, 0],
    rightAlongRow: [0, 1, 0],
    // Columns
    upAlongCol: [0, 0, -1],
    downAlongCol: [0, 0, -1],
    // Diagonals
    mainDiagonal: [0, -1, -1],
    antiDiagonal: [0, -1, 1],
    // 3D
    above: [1, 0, 0],
    below: [-1, 0, 0]
}
// Function to play the game with a set of moves
const playOX3D = (moves) => {
    // Create a 4x4x4 matrix
        // First index: what board
        // Second index: what row
        // Third index: what col in row
    let board = Array.from({length: 4}, (matrix) => Array.from({length: 4}, (row) => Array.from({length: 4}, (space) => undefined)))

    // Loop through moves
        // Keeping track of whos turn it is and updating it
    for(let i = 0, turn = 'O'; i < moves.length; i++, turn = turn === 'O' ? 'X' : "O") {

        // Current board
        const currentBoard = moves[i][0]
        // X and Y cords in board
        const x = moves[i][1]
        const y = moves[i][2]

   
        // Check for illegal moves
        if(board[currentBoard][x][y] || (x > 3 || y > 3 || currentBoard > 3)) {
            return 'Illegal Move'
        } else {
            // Put pick on board
            board[currentBoard][x][y] = turn
        }
        

        // Find Winner
            // But only check for winner after each player has made 3 moves each. The next could be a win
       if(i >= 7 && checkForWinner(board, board[currentBoard],  x, y, turn)) {
        return `${turn} wins in ${i} moves`
       }
    }
    // If the loop ends
    return 'No Winner' 
}


// Helper function to check for a winner after each turn
const checkForWinner = (board, x, y, turn) => {
    
    // Check 2D board
    if(checkBoard(currentBoard, x, y, turn)) { return true }

    // Check 3D board
    return false
};


// Helper function to check the 2D board
const checkBoard = (board, x, y, z, turn) => {
    // Check Row
        // Check row that item is placed in
    if(checkDirection(board, x, y, z, 0, 1, 0, turn)) {return true}

    // Check Columns
        // check col that item is placed in
    if(checkDirection(board, x, y, z, 1, 0 , 0, turn)) {return true}

    // Check main and anti diagonals
        // Check the diags of the item
    if(checkDirection(board, x, y, z, 1, 1, 0, turn)) {return true}

    return false
};

// Helper function to check the 3D board
const check3DBoard = (board, currentBoard, x, y, turn) => {
    // Need to check the current board, the board above, and the board below
    
    // Check Rows

    // Check Columns

    // Check main and anti diagonals

    return false
}

// Helper function to check each direction on the board
const checkDirection  = (board, x, y, z, dx, dy, dz, turn) => {
    let consecutive = 1
    // Check in one direction
    for (let step = 1; step < 4; step++) {
        // Get the next cell
        let newX = x + dx * step;
        let newY = y + dy * step;
        let newZ = z + dz * step;

        // Check if the cell is within the board and if it matches the turn
        if (
          newX >= 0 && newX < 4 &&
          newY >= 0 && newY < 4 &&
          newZ >= 0 && newZ < 4 &&
          board[newZ][newX][newY] === turn
        ) {
          consecutive++;
        } else {
          break; // Stop if a non-matching cell is found
        }
      }

    // Check in the opposite direction
    for (let step = 1; step < 4; step++) {
        // Get the next cell in the opposite direction
        let newX = x - dx * step;
        let newY = y - dy * step;
        let newZ = z - dz * step;
        // Check if the cell is within the board and if it matches the turn
        if (
          newX >= 0 && newX < 4 &&
          newY >= 0 && newY < 4 &&
          newZ >= 0 && newZ < 4 &&
          board[newZ][newX][newY] === turn
        ) {
          consecutive++;
        } else {
          break; // Stop if a non-matching cell is found
        }
      }
    return consecutive === 4 ? true : false
};


// Test Cases
console.log(checkBoard(
    [
        ['X', 'O', 'O', 'O'],
        ['X', 'O', 'X', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
    ], 0, 0, 0, 'X'
))