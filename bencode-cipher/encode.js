function encodeInteger(data) {
  return `i${data}e`;
}

function encodeString(data) {
  return `${data.length}:${data}`;
}

function encodeList(data) {
  let encodedList = '';

  for (let index = 0; index < data.length; index++) {
    encodedList = encodedList + encode(data[index]);
  }

  return 'l' + encodedList + 'e';
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
  testEncode('List contains 1 integer', [1], 'li1ee');
  testEncode('List contains 2 integers', [1, 2], 'li1ei2ee');
  testEncode('List contains a string', ['hello'], 'l5:helloe');
  testEncode('List contains 2 strings', ['hello', 'good'], 'l5:hello4:goode');
  testEncode('List contains 2 elements int and str', [123, 'good'], 'li123e4:goode');
  testEncode('List contains another list', [[]], 'llee');
  testEncode('List contains str, int, and list', ['happy', 123, []], 'l5:happyi123elee');
  testEncode('List contains int, str, and list <- (int and str)', [10, 'apples', [-5, 'oranges']], 'li10e6:applesli-5e7:orangesee');
}

function testAllGivenTestCases() {
  testEncode('Integer', 123, "i123e");
  testEncode('Negative integer', -42, "i-42e");
  testEncode('Zero', 0, "i0e");
  testEncode('String', "hello", "5:hello");
  testEncode('Empty string', "", "0:");
  testEncode('String with space', "hello world", "11:hello world");
  testEncode('String with special char', "special!@#$chars", "16:special!@#$chars");
  testEncode('List inside list', ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testEncode('Empty list', [], "le");
  testEncode('List constains int, str, list', [0, "", ["test"]], "li0e0:l4:testee");
  testEncode('List constains str, int, list', ["", 0, []], "l0:i0elee");
  testEncode('Multiple nested lists', ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

function testAllEncodeCases() {
  testAllIntegerEncode();
  testAllStringEncode();
  testAllListEncode();
  testAllGivenTestCases();
}

testAllEncodeCases();
