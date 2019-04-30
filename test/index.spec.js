const { assert } = require('chai');
const cpfValidator = require('../lib/index');

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

  describe('CPFs invalidos:', () => {
    it('Deve retornar false para entrada vazia', () => {
      assert.equal(cpfValidator.cpfValidator(''), false);
    });
    it('Deve retornar false para entrada com Numeros e letras: 1sd2d3456', () => {
      assert.equal(cpfValidator.cpfValidator('1sd2d3456'), false);
    });
    it('Deve retornar false para entrada < 9 digitos: 123456', () => {
      assert.equal(cpfValidator.cpfValidator('123456'), false);
    });
    it('Deve retornar false para entrada com 9 digitos iguais como 00000000000', () => {
      assert.equal(cpfValidator.cpfValidator('000000000'), false);
    });
  });
});
