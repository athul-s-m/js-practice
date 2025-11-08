const runnerLogs = [[2, 3, 2], [4], [1, 1]];
const sumOfMiles = (sum, mile) => sum + mile;
const totalMiles = runnerLogs.flat().reduce(sumOfMiles);

console.log(totalMiles);