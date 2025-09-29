function isEven(evaluatingNumber) {
  return evaluatingNumber % 2 === 0;
}

function main() {
  const evaluatingNumber = 2;
  const numberCharacter = isEven(evaluatingNumber) ? "Even" : "odd";

  console.log(numberCharacter);
}

main();
