describe('Game Component', () => {
  beforeEach(() => {
    // Visit the game page
    cy.visit('/game'); // Adjust if the URL for the game is different
  });

  it('should load the game with a grid of words', () => {
    // Ensure the game grid is displayed with 9 items
    cy.get('[data-cy="game-grid"]')
      .find('[data-cy^="image-tile-"]')
      .should('have.length', 9); // Assuming the grid has 9 tiles
  });

  it('should select a target word and play its audio', () => {
    // Check if the target word is displayed
    cy.get('h1.font-bold.text-2xl.text-blue-900')
      .should('not.be.empty')
      .and('have.length.greaterThan', 0);

    // Simulate clicking on the sound image
    cy.get('.sound-image').click();

    // Verify if the audio file plays by checking if the audio element exists
    cy.get('audio')
      .should('have.attr', 'src')
      .and('match', /audio\//);
  });

  it('should allow dragging and dropping the word', () => {
    // Drag the bear paw to the first droppable image tile
    const firstImageId = 1; // Example ID, adjust based on the grid content

    cy.get('.object-fill') // Assuming the draggable bear paw has this class
      .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 });
    
    cy.get(`[data-cy="image-tile-${firstImageId}"]`) // Droppable target element
      .trigger('mousemove', { pageX: 100, pageY: 100 });

    cy.get(`[data-cy="image-tile-${firstImageId}"]`)
      .trigger('mouseup', { force: true });

    // After the drag and drop, check if the win counter increased
    cy.get('.flex.flex-wrap.justify-start.mt-4.w-full')
      .find('img[src="/star.png"]')
      .should('have.length', 1); // Check if the first star appears (win counter increment)
  });

  it('should update the grid when a month is selected from the dropdown', () => {
    // Select a new month (e.g., October)
    cy.get('select')
      .select('1') // Selecting October from the dropdown
      .should('have.value', '1');

    // Ensure the grid is updated (new words should be visible)
    cy.get('[data-cy="game-grid"]')
      .find('[data-cy^="image-tile-"]')
      .should('have.length', 9); // The grid should still have 9 tiles
  });

  it('should reset the game when all words are used', () => {
    // Simulate selecting words until all have been used
    cy.get('.object-fill') // Drag the bear paw for each word in the grid
      .each(() => {
        cy.get(`[data-cy="game-grid"]`)
          .find('[data-cy^="image-tile-"]')
          .first()
          .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
          .trigger('mousemove', { pageX: 100, pageY: 100 })
          .trigger('mouseup', { force: true });
      });

    // Check if the game has reset (i.e., win counter reset to 0)
    cy.get('.flex.flex-wrap.justify-start.mt-4.w-full')
      .find('img[src="/star.png"]')
      .should('have.length', 0); // No stars after the reset
  });
});
