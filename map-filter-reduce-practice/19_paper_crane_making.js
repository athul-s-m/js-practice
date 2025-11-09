// 19. Paper Crane Making
// Origami students make cranes in sessions:

// [3, 2]
// [1]
// [4]
// Compute the total cranes

const cranes = [[3, 2], [1], [4]];
const totalcranes = cranes.flat().reduce((x, y) => x + y, 0);
console.log(totalcranes);