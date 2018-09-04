const chai = require('chai');
const myLib = require('../myLib');
const cardValidator = myLib.cardValidator;
const expect = chai.expect;


describe('cardValidator()', () =>{

  it('Deve retornar Erro para  o conteudo ("") ', () => {
      expect(cardValidator(' ')).to.equal('Erro');
  });
  it('Deve retornar Erro para o conteudo ("A") ', () => {
      expect(cardValidator('A')).to.equal('Erro');
  });
  it('Deve retornar Erro para conteudo (1) ', () => {
      expect(cardValidator('1')).to.equal('Erro');
  });
  it('Deve retornar true para conteudo ("4136797561379710") ', () => {
      expect(cardValidator('4136797561379710')).to.equal(true);
  });
  it('Deve retornar false para conteudo ("4136797551") ', () => {
      expect(cardValidator('4136797551')).to.equal(false);
  });

})
