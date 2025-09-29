function main() {
  let x = 10;
  let y = 20;

  console.log("Before Swapping");
  console.log("x:" + x + " y:" + y);

  x = x + y;
  y = x - y;
  x = x - y;
  
  console.log("After Swapping");
  console.log("x:" + x + " y:" + y);
}

main();
