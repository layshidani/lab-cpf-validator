const { assert } = require('chai');
const cpfValidator = require('../index');

describe('Validador de CPF', () => {
  describe('Deve retornar true para CPFs válidos:', () => {
    it('resto =  0: 82367085005', () => {
      assert.equal(cpfValidator.cpfValidator('82367085005'), true);
    });
    it('resto = 1: 36161186039', () => {
      assert.equal(cpfValidator.cpfValidator('36161186039'), true);
    });
    it('resto = 5: 32384739028', () => {
      assert.equal(cpfValidator.cpfValidator('32384739028'), false);
    });
    it('resto = 10: 12345678909', () => {
      assert.equal(cpfValidator.cpfValidator('12345678909'), true);
    });
    it('resto !== do primeiro dígito verificador e resto < 2: 97509998000', () => {
      assert.equal(cpfValidator.cpfValidator('97509998000'), true);
    });
  });

  describe('Deve retornar false para CPFs inválidos:', () => {
    it('vazio', () => {
      assert.equal(cpfValidator.cpfValidator(''), false);
    });

    it('< 9 dígitos: 123456', () => {
      assert.equal(cpfValidator.cpfValidator('123456'), false);
    });

    it('9 dígitos iguais como 00000000000', () => {
      assert.equal(cpfValidator.cpfValidator('000000000'), false);
    });
  });
});
