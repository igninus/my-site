const getNumbers = (value) => {
  let numbersInString = '';
  findNumbersInString();

  const resultNumber = parseInt(numbersInString, 10);

  return resultNumber;


  function findNumbersInString() {
    for (const letter of value.toString()) {
      if (isNumberParse(letter)) {
        numbersInString += letter;
      }
    }
  }

  function isNumberParse(suspectNumber) {
    suspectNumber = parseInt(suspectNumber, 10);
    return !Number.isNaN(suspectNumber);
  }
};

const getNumbersTest = () => {
  console.log(getNumbers('2023 год'));
  console.log(getNumbers('EC 2022'));
  console.log(getNumbers('1 кефир, 0.5 батона'));
  console.log(getNumbers('агент 007'));
  console.log(getNumbers('а я томат'));

  console.log(getNumbers(2023));
  console.log(getNumbers(-1));
  console.log(getNumbers(1.5));
}

getNumbersTest();
