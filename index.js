console.log('==== Validador de CPF ====');
function inputValidate(cpf) {
  if (cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999") {
    return false;
  }
  return true;
}

function cpfValidator(cpf) {
  if (inputValidate(cpf)) {
    let sum = 0;
    let rest;

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    rest = sum % 11;

    if (rest === 10 || rest === 11 || rest < 2) {
      rest = 0;
    } else {
      rest = 11 - rest;
    }

    if (rest !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;

    for (i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    rest = sum % 11;

    if (rest === 10 || rest === 11 || rest < 2) {
      rest = 0;
    } else {
      rest = 11 - rest;
    }

    if (rest !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
    return true;
  }
  return false;
}

console.log('cpfValidator("40"): ', cpfValidator('40'));
console.log('cpfValidator("12345678909"): ', cpfValidator('12345678909'));
console.log('cpfValidator("99999999999"): ', cpfValidator('99999999999'));