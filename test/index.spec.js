const { assert } = require('chai');
const cpfValidator = require('../index');

describe('Validador de CPF', () => {
  describe('Deve retornar true para CPFs válidos:', () => {
    it('12345678909', () => {
      assert.equal(cpfValidator('12345678909'), true);
    });

    it('33092858042', () => {
      assert.equal(cpfValidator('33092858042'), true);
    });

    it('77266592038', () => {
      assert.equal(cpfValidator('77266592038'), true);
    });
  });

  describe('Deve retornar false para CPFs inválidos:', () => {
    it('vazio', () => {
      assert.equal(cpfValidator(''), false);
    });

    it('< 9 dígitos: 123456', () => {
      assert.equal(cpfValidator('123456'), false);
    });

    it('9 dígitos iguais como 00000000000', () => {
      assert.equal(cpfValidator('000000000'), false);
    });
  });
});
