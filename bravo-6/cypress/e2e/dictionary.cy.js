// cohen's test - dictionary opens properly upon button click
describe("open dictionary",()=>{
    it("should open the dictionary",()=>{
        cy.visit("http://ugdev.cs.smu.ca:3002");
        cy.get("button").click();
        cy.get("h1").should("contain","dictionary");
    });
});