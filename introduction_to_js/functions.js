function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a < b ? a : b;
}

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

console.log(sum(10,min(10, div(10, 2))));
