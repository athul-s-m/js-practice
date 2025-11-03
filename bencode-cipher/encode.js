function encode(data) {
  return `i${data}e`;
}

function consoleMessage(message, isPass) {
  const symbol = isPass ? "✅" : "❌";
  console.log(symbol, message);
}

function displayInputActualExpected(date, actual, expected) {
  console.log();
  console.log(`   Input   :  [${date}]`);
  console.log(`   Actual  :  ${actual}`);
  console.log(`   Expected:  ${expected}`);
  console.log(`   ----`);
}

function testEncode(message, data, expectedOutput) {
  const actual = encode(data);
  const isPass = actual === expectedOutput;
  consoleMessage(message, isPass);
  
  if (!isPass) {
    displayInputActualExpected(data, actual, expectedOutput);
  }
}

function testAllEncodeCases() {
  testEncode('Zero', 0, 'i0e');
  testEncode('Positive integer in single digit', 4, 'i4e');
  testEncode('Positive integer in two digits', 12, 'i12e');
  testEncode('Positive integer in more than 2 digits', 333, 'i333e');

  testEncode('Negative integer', -2, 'i-2e');
  testEncode('Negative integer in more than 1 digit', -25, 'i-25e');
}

testAllEncodeCases();function encode(data) {
  return `i${data}e`;
}

function consoleMessage(message, isPass) {
  const symbol = isPass ? "✅" : "❌";
  console.log(symbol, message);
}

function displayInputActualExpected(date, actual, expected) {
  console.log();
  console.log(`   Input   :  [${date}]`);
  console.log(`   Actual  :  ${actual}`);
  console.log(`   Expected:  ${expected}`);
  console.log(`   ----`);
}

function testEncode(message, data, expectedOutput) {
  const actual = encode(data);
  const isPass = actual === expectedOutput;
  consoleMessage(message, isPass);
  
  if (!isPass) {
    displayInputActualExpected(data, actual, expectedOutput);
  }
}

function testAllEncodeCases() {
  testEncode('Zero', 0, 'i0e');
  testEncode('Positive integer', 4, 'i4e');
  testEncode('Negative integer', -2, 'i-2e');

}

testAllEncodeCases();
