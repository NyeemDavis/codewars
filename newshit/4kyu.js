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



// Conway's Game of Life
// Link to Problem: https://www.codewars.com/kata/52423db9add6f6fc39000354/train/javascript
// Notes
    // Less then 2 alive neigbors => dead/underpopulation
    // More than 3 alive neighbors => dead/overpopulation
    // 2 or 3 live neighbors => survives/next-gen
    // Dead cell with 3 live neighbors => alive
    // Moving horizontally and vertically
    // Recursion

var gliders = [
        [[1,0,0],
        [0,1,1],
        [1,1,0]],
        [[0,1,0],
        [0,0,1],
        [1,1,1]]
    ];
    // Check whether the cell is already dead or alive to skip some checks
    // Recursion to search each neighbor
    // Identify borders
    // 2D Array
    // Check boundaries
    // Map function??
const getGeneration = (cells, generations) => {
        // Deep level copy
        const cellsCopy = cells.map(arr => [...arr]);
        const colLength = cells[0].length;
        for(let gen = 0; gen < generations; gen++) {
            // Array traversal
            for(let row = 0; row < cellsCopy.length; row++) {   
                for(let col = 0; col < colLength; col++) {
                    // Variable for current cell
                    const currCell = cells[row][col];
                    const neighbors = countNeighbors(row, col, cells);
                    // If the cell is a 1
                    if(currCell === 1) {
                        // If they fail the over/under population check, make it a 0. Else it lives
                        cellsCopy[row][col] = (neighbors < 2 || neighbors > 3) ? 0 : 1;
                    } else { // Its a 0
                        // If we have 3 alive neighbors, it becomes a 1
                        cellsCopy[row][col] = (neighbors === 3) ? 1 : 0;
                    }
                }
            }
            cells = cellsCopy.map(arr => [...arr]);
        }
        return cells;
    }
    
const countNeighbors = (x, y, cells) => {
    let liveNeighbors = 0;
    for(let i = -1; i <= 1; i++) {
       for(let j = -1; j <= 1; j++) {
           if(i === 0 && j === 0) {
               continue;
           }
           let newX = x + i;
           let newY = y + j;
           if(newX >= 0 && newY >= 0 && newX < cells.length && newY < cells[0].length) {
               liveNeighbors += cells[newX][newY] === 1 ? 1 : 0;
           }
       }
    }
    return liveNeighbors;
}



// Link
// Problem: 
