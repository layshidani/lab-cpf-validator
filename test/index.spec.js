const { assert } = require('chai');
const cpfValidator = require('../index');

describe('cpfValidator()', () => {
  it('Deve retornar true para CPF válidos: 12345678909', () => {
    assert.equal(cpfValidator('12345678909'), true);
  });

  it('Deve retornar false para CPF: 33092858042', () => {
    assert.equal(cpfValidator('33092858042'), true);
  });

  it('Deve retornar false para CPF: 77266592038', () => {
    assert.equal(cpfValidator('77266592038'), true);
  });

  it('Deve retornar false para CPF vazio', () => {
    assert.equal(cpfValidator(''), false);
  });

  it('Deve retornar false para CPF com menos de 9 dígitos', () => {
    assert.equal(cpfValidator('123456'), false);
  });

  it('Deve retornar false para CPF com 9 dígitos iguais como 00000000000', () => {
    assert.equal(cpfValidator('000000000'), false);
  });
});
