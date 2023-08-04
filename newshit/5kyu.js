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
    // code here
    // Loop for amount of times we generate the next-gen
    for(gen = 0; gen <= generations; gen++) {

        // Array traversal
        for(let i = 0; i < cells.length; i++) {
            for(j = 0; j < cells[i].length; i++) {
                // Right cells[i][j + 1]
                // Left cells[i][j - 1]
                // Up cells[i - 1][j]
                // Down cells[i + 1][j]
                // Corners
                    // Top Left cells[i - 1][j - 1]
                    // Top right cells[i - 1][j + 1]
                    // Bottom left cells[i + 1][j - 1]
                    // Bottom right cells[i + 1][j + 1]

            }
        }
    }
    return 
}


const search = (array) => {
    let neighbors = 0

  
}
console.log(getGeneration(gliders[0], 1))