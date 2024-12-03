//Emmanuel's Test - updating the dropdown menu when month is selected
describe("Game Component Dropdown", () => {
  beforeEach(() => {
    // Visit the game page
    cy.visit("http://ugdev.cs.smu.ca:3002"); // Adjust if the URL for the game is different
  });

  it("should update the dropdown value when a new month is selected", () => {
    // Select a new month (e.g., October)
    cy.get("select")
      .select("1") // Selecting October from the dropdown
      .should("have.value", "1"); // Ensure that the dropdown value is correctly set to October
  });
});
