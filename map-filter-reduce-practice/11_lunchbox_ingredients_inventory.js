const ingredients = [["rice", "lentils"], ["rice"], ["curd", "lentils"]];

const unique = (array, element) => {
  if (!array.includes(element)) {
    array.push(element);
  }
  return array;
}

const uniqueElements = ingredients.flat().reduce(unique, []);

console.log(uniqueElements);