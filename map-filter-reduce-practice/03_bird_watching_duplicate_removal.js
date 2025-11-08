const birds = ["sparrow", "crow", "sparrow", "eagle", "crow"];
const isInclude = (array, value) => array.includes(value);
console.log(birds.filter(isInclude));