const { assert } = require('chai');
const cpfValidator = require('../index');

describe('Validador de CPF', () => {
  context('CPFs validos:', () => {
    it('Deve retornar true para: 82367085005', () => {
      assert.equal(cpfValidator('82367085005'), true);
    });
    it('Deve retornar true para: 36161186039', () => {
      assert.equal(cpfValidator('36161186039'), true);
    });
    it('Deve retornar true para: 12345678909', () => {
      assert.equal(cpfValidator('12345678909'), true);
    });
    it('Deve retornar true para: 97509998000', () => {
      assert.equal(cpfValidator('97509998000'), true);
    });
  });

  context('CPFs invalidos:', () => {
    it('Deve retornar false para: 45326789812', () => {
      assert.equal(cpfValidator('45326789812'), false);
    });
    it('Deve retornar false para entrada vazia', () => {
      assert.equal(cpfValidator(''), false);
    });
    it('Deve retornar false para entrada com Numeros e letras: 1sd2d3456', () => {
      assert.equal(cpfValidator('1sd2d3456'), false);
    });
    it('Deve retornar false para entrada < 9 digitos: 123456', () => {
      assert.equal(cpfValidator('123456'), false);
    });
    it('Deve retornar false para entrada com 9 digitos iguais como 00000000000', () => {
      assert.equal(cpfValidator('000000000'), false);
    });
  });
});
