function encodeInteger(data) {
  return `i${data}e`;
}

function encodeString(data) {
  return `${data.length}:${data}`;
}

function encodeList(data) {
  return 'le';
}

function encode(data) {
  if (typeof data === 'number') {
    return encodeInteger(data);
  }

  if (typeof data === 'string') {
    return encodeString(data);
  }

  if (typeof data === 'object') {
    return encodeList(data);
  }
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

function testAllIntegerEncode() {
  testEncode('Zero', 0, 'i0e');
  testEncode('Positive integer in single digit', 4, 'i4e');
  testEncode('Positive integer in two digits', 12, 'i12e');
  testEncode('Positive integer in more than 2 digits', 333, 'i333e');

  testEncode('Negative integer', -2, 'i-2e');
  testEncode('Negative integer in more than 1 digit', -25, 'i-25e');
}

function testAllStringEncode() {
  testEncode('Empty String', '', '0:');
  testEncode('Single char string', 'a', '1:a');
  testEncode('Multiple char string', 'abc', '3:abc');
}

function testAllListEncode() {
  testEncode('Empty List', [], 'le');
}

function testAllEncodeCases() {
  //testAllIntegerEncode();
  //testAllStringEncode();
  testAllListEncode();
}

testAllEncodeCases();
