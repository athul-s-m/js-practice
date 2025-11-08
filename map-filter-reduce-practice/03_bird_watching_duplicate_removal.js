const birds = ["sparrow", "crow", "sparrow", "eagle", "crow"];

const isInclude = (array, element) => {
  if (!array.includes(element)) {
    array.push(element);
  }
  return array;
}

console.log(birds.reduce(isInclude, []));