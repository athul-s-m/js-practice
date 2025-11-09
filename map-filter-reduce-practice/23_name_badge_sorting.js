// 23. Name Badge Sorting
// Students sign in repeatedly:

// ["A", "B", "A", "C", "B"]
// Create a unique list of attendees.

const signs = ["A", "B", "A", "C", "B"];

const unique = (array, element) => {
  if (!array.includes(element)) {
    array.push(element);
  }
  return array;
}

const uniqueListOfAttendee = signs.flat().reduce(unique, []);

console.log(uniqueListOfAttendee);