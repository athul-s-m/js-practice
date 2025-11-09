// 26. Morning Exercise Count
// Repetitions:

// [10, 20]
// [5]
// [15, 10]
// Total repetitions done.

const data = [[10, 20], [5], [15, 10]];
const totalRepetitions = data.flat().reduce((x, y) => x + y);
console.log(totalRepetitions);