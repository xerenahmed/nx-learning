describe('store-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&args=title:GameStore'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'GameStore');
    });
});
