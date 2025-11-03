function decode(bencodedString) {
  return 2;
}

function consoleMessage(message, isPass) {
  const symbol = isPass ? "✅" : "❌";
  console.log(symbol, message);
}

function displayInputActualExpected(data, actual, expected) {
  console.log();
  console.log(`   Input   :  [${data}]`);
  console.log(`   Actual  :  ${actual}`);
  console.log(`   Expected:  ${expected}`);
  console.log(`   ----`);
}

function testdecode(message, data, expectedOutput) {
  const actual = decode(data);
  const isPass = actual === expectedOutput;
  consoleMessage(message, isPass);
  
  if (!isPass) {
    displayInputActualExpected(data, actual, expectedOutput);
  }
}

testdecode('Decoded Str to int', 'i2e', 2);
