function largestOfTwoNumbers(number1, number2) {
  return number1 < number2 ? number2 : number1;
}

function largestOfThreeNumbers(number1, number2, number3) {
  const largest = largestOfTwoNumbers(number1, number2);
  return largestOfTwoNumbers(largest, number3);
}

function main() {
  const number1 = 1000;
  const number2 = 20;
  const number3 = 105;

  const largestNumber = largestOfThreeNumbers(number1, number2, number3);

  console.log("largest number:" + largestNumber);
}

main();
