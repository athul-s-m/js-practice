const cutsRibbons = ["red", "blue", "red", "green", "red", "blue", "blue",];

const isRibbonBlue = (count, value) => value === 'blue' ? count + 1 : count;

console.log(cutsRibbons.reduce(isRibbonBlue, 0));