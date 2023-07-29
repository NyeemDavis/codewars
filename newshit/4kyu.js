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
    // Recursion
    // Loop multiple times for each round
        // for every team in the loop, we have to return the match. No duplicate matches
        // Ex:  if [1, 3] no [3, 1] since they technically already played.
        // num of matches in that round is half of the amount of teams
        // Keep track of team in round

// Code
const buildMatchesTable = (numOfTeams) => {
    let matrix = []
    const length = numOfTeams
    let teams = Array.from({length}, (_, index) => index + 1)
    // Each round will be half of the num of teams we have
    // Keep track of current team, prev team
    // If for example [1, 2] is done then make sure [2, 1] isn't done again
    const rounds = numOfTeams / 2
    for(let round = 0; round < rounds; round++) {
       const matchups = [];
       
       matrix.push(matchups)
    }
    return matrix
};

console.log(buildMatchesTable(20))