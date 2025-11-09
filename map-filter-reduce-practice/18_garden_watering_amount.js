// 18. Garden Watering Amount
// Water used:

// [1, 2, 1]
// [3]
// [2]
// Total amount of water used.

const waterUsed = [[1, 2, 1], [3], [2]];
const totalCount = (count, x) => x + count;
const totalAmountOfWater = waterUsed.flat().reduce(totalCount);

console.log(totalAmountOfWater);