const cpfLength = 11;
const mod11 = (num) => num % cpfLength;
const isEqual = (num1) => (num2) => num2 === num1;
const mergeDigits = (num1, num2) => `${num1}${num2}`;
const lastTwoDigits = (cpf) => `${cpf[9]}${cpf[10]}`;

const isRepeatingNum = (str) =>
  str.split('').every((elem) => elem === str[0]);

const getCpfNumeral = (cpf) => cpf.substr(0, 9).split('');

const toSum = (multiplier) => (result, num) =>
  result + (num * multiplier--);

const sumResult = (list, multiplier) =>
  list.reduce(toSum(multiplier), 0);

const getValidationDigit = (multiplier) => (cpf) =>
  getDigit(mod11(sumResult(cpf, multiplier)));

const getDigit = (num) =>
  (num > 1) ? cpfLength - num : 0;

const isValidCpf = (cpf) => {
  const cpfNum = getCpfNumeral(cpf);
  const firstDigit = getValidationDigit(10)(cpfNum);
  const secondDigit = getValidationDigit(cpfLength)(cpfNum.concat(firstDigit));

  return isEqual(lastTwoDigits(cpf))(mergeDigits(firstDigit, secondDigit));
};


const cpfValidator = (cpf) => !(isRepeatingNum(cpf)) && isValidCpf(cpf);

module.exports = cpfValidator;
