// Sam's test - dictionary closes properly
describe('Exit Dictionary Button Test by Sam Kohler', () => {
    it("should exit the dictionary",()=>{
        cy.visit("http://ugdev.cs.smu.ca:3002");
        cy.get("button").click();
        cy.get("h1").not("dictionary");
    });
});