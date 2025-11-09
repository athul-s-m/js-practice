// 22. Movie Marathon Titles
// Movies watched:

// ["Inception", "Dunkirk"]
// ["Interstellar"]
// ["Inception"]
// List unique titles watched.

const movies = [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]];

const unique = (array, element) => {
  if (!array.includes(element)) {
    array.push(element);
  }
  return array;
}

const moviesList = movies.flat().reduce(unique, []);

console.log(moviesList);