describe('BearPaw Component Test by Riley Winchester', () => {
  const baseUrl = 'http://ugdev.cs.smu.ca:3002';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should confirm the presence of the BearPaw component', () => {
    cy.get('[data-cy="bearpaw"]').should('be.visible');
  });
});
