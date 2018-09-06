const chai = require('chai');
const index = require('../index');
const cardValidator = index.cardValidator;
const expect = chai.expect;


describe('cardValidator()', () =>{

  it('Deve retornar Erro para  o conteudo () ', () => {
      expect(cardValidator()).to.equal('Erro');
  });
  it('Deve retornar Erro para o conteudo ("A") ', () => {
      expect(cardValidator('A')).to.equal('Erro');
  });
  it('Deve retornar Erro para conteudo ("1") ', () => {
      expect(cardValidator('1')).to.equal('Erro');
  });
  it('Deve retornar true para conteudo ("36490102462661") ', () => {
      expect(cardValidator('36490102462661')).to.equal(true);
  });
  it('Deve retornar false para conteudo ("4136797561379750") ', () => {
      expect(cardValidator('4136797561379750')).to.equal(false);
  });

})
