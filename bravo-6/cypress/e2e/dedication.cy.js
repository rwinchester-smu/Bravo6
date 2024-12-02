describe('Dedication visibility by Elyse Louis', () => {
  it('should check that the dedication to Angie is visible on the main page', () => {
    cy.visit('http://ugdev.cs.smu.ca:3002');
    cy.contains("Mikwite'tmk+t Angie").should('be.visible');
  })
})