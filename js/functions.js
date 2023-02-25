
function strLenght(str, numb){
  str = str.length;
  if (str <= numb){
    return true;
  }
  return false;
}

function palindrome(str){
  str = str.toLowerCase().replaceAll(' ', '');
  let j = str.length - 1;
  for (let i = 0; i < j; i++,j--) {
    if (str[i] !== str[j]){
      return false;
    }
  }
  return true;
}

function extractDigits(str) {
  const digitString = str.replace(/[^0-9]/g, '');
  return digitString === '' ? NaN : parseInt(digitString);
}

function padString(str, minLength, filler) {
  while (str.length < minLength) {
    str = filler.slice(0, minLength - str.length) + str;
  }
  return str;
}

