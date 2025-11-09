// 15. Wildlife Sighting Count
// Animal sightings:

// ["deer", "deer", "rabbit", "deer"]
// Count how many times “deer” was seen.

const animals = ["deer", "deer", "rabbit", "deer"];

const isDeer = (x) => x === 'deer';
const countDeer = (count, x) => isDeer(x) ? count + 1 : count;

console.log(animals.reduce(countDeer, 0));