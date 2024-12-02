describe('BearPaw Presence and Dragging Test', () => {
  const baseUrl = 'http://ugdev.cs.smu.ca:3002';

  beforeEach(() => {
    // Visit the application
    cy.visit(baseUrl);
  });

  it('should confirm the presence of the BearPaw component', () => {
    // Check that the BearPaw element is visible
    cy.get('[data-cy="bearpaw"]').should('be.visible');
  });

  it('should allow the BearPaw component to be draggable', () => {
    // Simulate dragging the BearPaw element
    cy.get('[data-cy="bearpaw"]')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 200, clientY: 200 })
      .trigger('mouseup');
    
    // Optionally check the new position if draggable logic is implemented
    cy.get('[data-cy="bearpaw"]').should(($bearpaw) => {
      const position = $bearpaw.position();
      expect(position.left).to.be.greaterThan(0);
      expect(position.top).to.be.greaterThan(0);
    });
  });
});
