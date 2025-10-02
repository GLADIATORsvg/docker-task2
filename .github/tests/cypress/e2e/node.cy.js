describe('Node Server App Test', () => {
  
  it('Start page successfully loads', () => {
    cy.visit('/')
  });

  it('Start page shows right content', () => {
    const rightContent = 'Nodejs API Server';
    cy.visit('/');
    cy.get('body').should('contain', rightContent);
  });
  
  it('API works', () => {
    const rightContent = [{name: 'user1'}];
    cy.request('/api/users')
      .then((resp) => {
        expect(resp.body).to.deep.eq(rightContent);
      })
  });

});
