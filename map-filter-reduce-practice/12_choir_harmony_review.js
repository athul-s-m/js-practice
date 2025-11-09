// 12. Choir Harmony Review
// Singers produce sequences:

// ["la", "la"]
// ["mi"]
// ["so", "la"]
// Check whether any group sang "so".

const choirSequence = [["la", "la"], ["mi"], ["so", "la"]];

const isSoThere = choir => choir === 'so';

console.log(choirSequence.flat().some(isSoThere));