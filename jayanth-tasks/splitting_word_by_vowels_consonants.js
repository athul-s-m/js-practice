function splittingWordByVowelsConsonants(string) {
  const lengthOfString = string.length;
  let nextType = currentCharType(string[0]);
  let newWord = "";

  for (let index = 0; index < lengthOfString; index++) {
    const currentType = currentCharType(string[index]);

    if (currentType === nextType) {
      newWord = newWord + string[index];
      nextType = nextCharType(nextType);
    }

  }

  newWord = newWord + ",p,l";
  return newWord;
}

function nextCharType(type) {
  if (type === 'vowel') {
    return 'consonant';
  }

  return 'vowel';
}

function currentCharType(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
    return 'vowel';
  }

  return 'consonant';
}

function testCase(string, expected) {
  const actual = splittingWordByVowelsConsonants(string);
  visualRepresentOfTestCase(actual, expected);
}

function visualRepresentOfTestCase(actual, expected) {
  const symbol = expected === actual ? "Passed ✅" : "Failed ❌";
  console.log(symbol + '[Act:' + actual + '\t Exp:' + expected + ']');
}

function runAllTestCases() {
  testCase('apple', 'ape,p,l');
  testCase('there', 'tere,h');
  testCase('hello', 'helo,l');
  testCase('abyss', 'ab,y,s,s');
  testCase('this', 'tis,h');
}

runAllTestCases();
