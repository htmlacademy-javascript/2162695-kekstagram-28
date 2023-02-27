
const checkStringLength = (string, number) => string.length <= number;

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

const extractDigits = (string) => parseInt(String(string).replace(/[^0-9]/g, ''), 10);

const createString = (string, minLength, filler) => {
  while (string.length < minLength) {
    string = filler.slice(0, minLength - string.length) + string;
  }
  return string;
};

