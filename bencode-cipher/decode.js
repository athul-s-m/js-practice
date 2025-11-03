function decode(bencodedString) {
  if (bencodedString[0] === 'i') {
    return parseInt(bencodedString.slice(1, bencodedString.length));
  }

  if (bencodedString[0] >= 0) {
    return bencodedString.slice(2);
  }
}

function consoleMessage(message, isPass) {
  const symbol = isPass ? "✅" : "❌";
  console.log(symbol, message);
}

function displayInputActualExpected(data, actual, expected) {
  console.log();
  console.log(`   Input   :  ${data}`);
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
testdecode('Decoded Str to int', 'i42e', 42);
testdecode('Decoded Str to int', 'i-42e', -42);
testdecode('Decoded str encoded to str', '5:hello', 'hello');
testdecode('Decoded empty str', '0:', '');
