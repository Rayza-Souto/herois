import { publicKey, timestamp, hash } from '../../src/Config/Key';

describe('API Test', () => {
  it('Retornar a resposta da api', () => {
    cy.request('https://gateway.marvel.com:443/v1/public/characters?ts='+timestamp+'&apikey='+publicKey+'&hash='+hash)
      .then((response) => {
        expect(response.status).to.eq(200); // Verifica se o status da resposta é 200
        expect(response.body).to.have.property('data'); // Verifica se a resposta possui a propriedade data
        expect(response.body.data).to.have.property('results');  // Verifica se a resposta possui a propriedade results
        expect(response.body.data.results).to.have.length(20); // Verifica se a resposta possui 20 resultados
      });
  });
    it('Retornar a resposta da api com um id específico', () => {
    cy.request('https://gateway.marvel.com:443/v1/public/characters/1011334?ts='+timestamp+'&apikey='+publicKey+'&hash='+hash)
      .then((response) => {
        expect(response.status).to.eq(200); // Verifica se o status da resposta é 200
        expect(response.body).to.have.property('data'); // Verifica se a resposta possui a propriedade data
        expect(response.body.data).to.have.property('results');  // Verifica se a resposta possui a propriedade results
        expect(response.body.data.results).to.have.length(1); // Verifica se a resposta possui 1 resultados
      });
});
  it ('Retornar a resposta da API com um nome especifico', () => {
    cy.request('https://gateway.marvel.com:443/v1/public/characters?name=wasp&ts='+timestamp+'&apikey='+publicKey+'&hash='+hash)
      .then((response) => {
        expect(response.status).to.eq(200); // Verifica se o status da resposta é 200
        expect(response.body).to.have.property('data'); // Verifica se a resposta possui a propriedade data
        expect(response.body.data).to.have.property('results');  // Verifica se a resposta possui a propriedade results
        expect(response.body.data.results).to.have.length(1); // Verifica se a resposta possui 1 resultados
      });
  })
});