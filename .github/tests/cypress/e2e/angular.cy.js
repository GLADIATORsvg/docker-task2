describe('Angular App Test', () => {

    const angularURL = Cypress.env('ANGULAR_URL');

    it('Start page successfully loads', () => {
      cy.visit(angularURL);
    });
  
    it('Start page shows right content', () => {
      const rightContent = 'Angular With NodeJS';
      cy.visit(angularURL);
      cy.get('h1').should('contain', rightContent);
    });
  
  });
  