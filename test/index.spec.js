const { assert } = require('chai');
const cpfValidator = require('../index');

describe('Validador de CPF', () => {
  describe('CPFs validos:', () => {
    it('(resto < 2) - Deve retornar true para: 82367085005', () => {
      assert.equal(cpfValidator.cpfValidator('82367085005'), true);
    });
    it('(resto < 2) - Deve retornar true para: 36161186039', () => {
      assert.equal(cpfValidator.cpfValidator('36161186039'), true);
    });
    it('(resto > 2) - Deve retornar true para: 12345678909', () => {
      assert.equal(cpfValidator.cpfValidator('12345678909'), true);
    });
    it('(resto > 2) - Deve retornar true para: 97509998000', () => {
      assert.equal(cpfValidator.cpfValidator('97509998000'), true);
    });
  });

  describe('Deve retornar false para CPFs invalidos:', () => {
    it('vazio', () => {
      assert.equal(cpfValidator.cpfValidator(''), false);
    });
    it('Numeros e letras: 1sd2d3456', () => {
      assert.equal(cpfValidator.cpfValidator('1sd2d3456'), false);
    });
    it('< 9 digitos: 123456', () => {
      assert.equal(cpfValidator.cpfValidator('123456'), false);
    });
    it('9 digitos iguais como 00000000000', () => {
      assert.equal(cpfValidator.cpfValidator('000000000'), false);
    });
  });
});
