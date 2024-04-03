function isPalindrome (str) {
  cleanString();
  let reversedStr = '';
  reverseStr();

  return str === reversedStr;

  function cleanString() {
    str = str.replaceAll(' ', '');
    str = str.toLowerCase();
  }

  function reverseStr() {
    for (const letter of str) {
      reversedStr = letter + reversedStr;
    }
  }
}

// 1.2
function isPalindrome1 (str) {
  const getHalfLength = () => str.length / 2;
  function isPalindromeFor () {
    for (let i = 0; i < getHalfLength(str); i++) {
      const letter = str.at(i);
      const oppositeletter = str.at(-(i + 1));

      if (letter !== oppositeletter) {
        return false;
      }
    }

    return true;
  }

  str = getCleanString(str);
  const result = isPalindromeFor(str);

  return result;
}

// Строка является палиндромом
console.log('true:', isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log('true:', isPalindrome('ДовОд')); // true
// Это не палиндром
console.log('false:', isPalindrome('Кекс'));  // false
// Это палиндром
console.log('true:', isPalindrome('Лёша на полке клопа нашёл ')); // true
