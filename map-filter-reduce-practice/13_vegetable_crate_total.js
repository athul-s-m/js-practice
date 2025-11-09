// 13. Vegetable Crate Totals
// Crate weights:

// [4, 6]
// [2, 3, 1]
// [5]
// Find the sum of all weights.

const crateWeights = [[4, 6], [2, 3, 1], [5]];
const totalCount = (count, weight) => weight + count;
const sumOfAllWeights = crateWeights.flat().reduce(totalCount);

console.log(sumOfAllWeights);
