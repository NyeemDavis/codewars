// Organize a Round Robin Tournament
// Link: https://www.codewars.com/kata/561c20edc71c01139000017c
// Problem
    // You are organizing a soccer tournament, so you need to build a matches table.
    // The tournament is composed by 20 teams.
    // It is a round-robin tournament (all-play-all), so it has 19 rounds, and each team plays once per round.
    // Each team confront the others once in the tournament (each match does not repeat in the tournament).
    // Your mission is to implement a function "buildMatchesTable" that receives the number of teams (always a positive and even number) and returns a matrix.
    // Each line of th matrix represents one round. Each column of the matrix represents one match
    // Match represented as two teams, each team gettinga number from 1 up until the number of teams.
    
    // Example:
    // Input: 4
    // Output: [[1, 4], [2, 3]], [[1, 3], [4, 2]], [[1, 2], [3, 4]]

// Psuedocode
    // Initalize array for matrix
    // Create an array from the amount of teams, each number will represent the team
    // Create a loop, that ends when the round is less than the total number of teams - 1(this represents the amount of matches each team plays)
    // Initalize array to hold matches for that round
    // Two variables to hold the teams
    // Push the matchup to matches, then add matches to matrix
    // Rotate 

// Code
const buildMatchesTable = (n) => {
    let matrix = []; 
    let teams = Array.from({length: n}, (_, i) => i + 1); 

    for(let round = 0; round < n - 1; round++) {
        let matches = [];

        for(let i = 0; i < n / 2; i++) {
            let team1 = teams[i];
            let team2 = teams[n - i - 1];
            matches.push([team1, team2]);
        }

        matrix.push(matches);

        // Rotate teams: keep the first team in place, move the second team to the end, and shift the others one place to the left.
        teams.splice(1, 0, teams.pop());
    }

    return matrix;
}

// Boggle Word Checker
// Link: https://www.codewars.com/kata/57680d0128ed87c94f000bfd/train/javascript
// Problem
    // Given a word and a boggle board, check if the word exists in the board.
    // The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are those horizontally or vertically neighboring.
    // The same letter cell may not be used more than once in a word.
    // The board is a 2D array of characters.
    // Two arguments, 2d aray and string


// Psuedocode
    // Keep track of marked letters

    // Make sure it doesn't attempt to reach outside of boundary
        // Boundaries
            // board[-1][0], board[0][-1], board[board.length][0], or board[0][board[0].length]
const checkWord = (board, word) => {
    const wordArr = word.split('')
    const checked = Array.from(board, (item) => Array.from(item,  (x) => x = false))
    for(i = 0; i < word.length; i++) {
        const row = checked[i]
        checked[row]
        depthSearch(board, board[i], board[0][i])
    }
    return 
}


const depthSearch = (array, row, col, remainder, markedOnes) => {
    if(row < 0 || row >= array.length || col < 0 || col >= array[0].length) {
        // This is an attempt to access outside the bounds of the board
        // so skip this direction and continue with the next one.
        return
    }

    return
}

console.log(checkWord( [
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ], 'BACON'));
    