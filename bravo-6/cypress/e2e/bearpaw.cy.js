describe('BearPaw Component Test by Riley Winchester', () => {
  const baseUrl = 'http://ugdev.cs.smu.ca:3002';

  beforeEach(() => {
    // Visit the application before each test
    cy.visit(baseUrl);
  });

  it('should confirm the presence of the BearPaw component', () => {
    // Check that the BearPaw element is visible
    cy.get('[data-cy="bearpaw"]').should('be.visible');
  });
});
