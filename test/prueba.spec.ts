import 'mocha';
import {expect} from 'chai';
import {add} from '../src/suma';

describe('EJ 10 - SUMA', () => {
  describe('Prueba del método add', () => {
    it('Se puede sumar una lista de números', () => {
      const expected = 36;
      const result = add();
      expect(expected).to.be.equal(result);
    });
  });
});