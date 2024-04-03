function myPadStart(str, minLength, addon) {
  const deficientLength = minLength - str.length;

  if (deficientLength <= 0) {
    return str;
  }

  let padStr = '';
  setPadStr();
  clipPadStr();

  return padStr + str;


  function setPadStr () {
    while (padStr.length < deficientLength) {
      padStr += addon;
    }
  }

  function clipPadStr () {
    if (padStr.length > deficientLength) {
      padStr = padStr.slice(0, deficientLength);
    }
  }
}

const myPadStartTest = () => {
  console.log('01: ', myPadStart('1', 2, '0'));
  console.log('0001: ', myPadStart('1', 4, '0'));
  console.log('werq: ', myPadStart('q', 4, 'werty'));
  console.log('wewq: ', myPadStart('q', 4, 'we'));

  console.log('qwerty: ', myPadStart('qwerty', 4, '0'));
}

myPadStartTest();
