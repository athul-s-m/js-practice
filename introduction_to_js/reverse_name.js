function reverseName(name) {
  let reverse = "";

  for (let character = name.length - 1; character >= 0; character--) {
    reverse = reverse + name[character];
  }
  
  return reverse;
}
console.log(reverseName("athul"));
