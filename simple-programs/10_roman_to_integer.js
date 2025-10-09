function romanToInteger(string) {
  return 1;
}

function consoleMessage(message, isPass) {
  const symbol = isPass ? "✅" : "❌";
  console.log(symbol, message);
}

function displayInputActualExpected(string, actual, expected) {
  console.log();
  console.log(`   Input   :  ${string}`);
  console.log(`   Actual  :  ${actual}`);
  console.log(`   Expected:  ${expected}`);
  console.log(`   ----`);
}

function testCase(message, string, expected) {
  const actual = romanToInteger(string);
  const isPass = actual === expected;
  consoleMessage(message, isPass);
  
  if (!isPass) {
    displayInputActualExpected(string, actual, expected);
  }
}

function allTestCases() {
  testCase('I in roman letter', 'I', 1);
}

allTestCases();
