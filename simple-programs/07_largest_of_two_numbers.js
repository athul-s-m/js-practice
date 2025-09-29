function largestOfTwoNumbers(number1, number2) {
  return number1 < number2 ? number2 : number1;
}

function main() {
  const number1 = 100;
  const number2 = 20;

  const largestNumber = largestOfTwoNumbers(number1, number2);
  
  console.log("largest number:", largestNumber);
}

main();
