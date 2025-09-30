function f(x) {
  if (x === 1) {
    return 1;
  }

  return 1 + f(x - 1);
}

console.log(f(5));
