const candyLogs = [[5, 3], [2], [4, 1]];
const totalCount = (count, num) => num + count;
const totalNumberOfCandies = candyLogs.flat().reduce(totalCount);

console.log(totalNumberOfCandies);
