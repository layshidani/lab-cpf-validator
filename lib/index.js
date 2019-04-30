function validateInput(cpf) {
  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  }
  return true;
}

function cpfValidator(cpf) {
  if (validateInput(cpf)) {
    let sum = 0;
    let rest;
    let num = cpf.split('');

    for (let i in num) {
      if (i < 9) {
        sum = sum + parseInt(num[i] * (10 - i));
      }
    }

    rest = sum % 11;

    if (rest < 2) {
      rest = 0;
    } else {
      rest = 11 - rest;
    }
    return true;
  }
  return false;
}

module.exports.cpfValidator = cpfValidator;
