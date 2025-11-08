const booksReturned = ["Dune", "Dune", "Foundation", "Dune"];

const isDune = (x) => x === 'Dune';
const countDune = (count, x) => isDune(x) ? count + 1 : count;

const duneReturnedCount = booksReturned.reduce(countDune, 0);

console.log(duneReturnedCount);