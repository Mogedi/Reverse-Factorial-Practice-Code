function reverseFactorial(number) {
  var i = 1;
  if(equalToOrLessThanZero(number)) {
    return 1;
  }
  while(aboveOrNotEqualToOne(number)) {
    i++
    number = number / i;
    if (number < 1) {
      number = 1;
      i = "NONE";
    }
  }
    return i;
}


function equalToOrLessThanZero(number) {
  return number <= 0;
}

function aboveOrNotEqualToOne(number) {
  return number != 1;
}
