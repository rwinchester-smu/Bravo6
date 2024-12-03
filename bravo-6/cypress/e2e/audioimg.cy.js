describe("check if audio image is there - Matthew",()=>{
  it("should check for the image",()=>{
      cy.visit("http://ugdev.cs.smu.ca:3002");
      cy.get('[alt="Sound"]');
  });
});
