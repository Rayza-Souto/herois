describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000') 
    })
  });

  describe('Verificar Texto Carregado', () => {
    it('Deve exibir o texto especificado', () => {
      // Visitar a URL da aplicação
      cy.visit('http://localhost:3000/');
  
      // Localizar o elemento que contém o texto esperado
      cy.get('h1.titulo').should('contain', 'Marvel Characteres');
    });
  });