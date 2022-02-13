import { getGreeting } from '../support/app.po';

describe('next-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('span').first().should('have.text', "Loading...");
  });
});
