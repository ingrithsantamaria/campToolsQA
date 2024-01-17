export class TextBox {
  navigate() {
    cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    cy.visit("/text-box");
  }
  formtextBox(fullName, email, currentAddress, permanentAddress) {
    cy.get("#userName").should("exist").and("be.visible").type(fullName);
    cy.get("#userEmail").should("exist").and("be.visible").type(email);
    cy.get("#currentAddress").should("exist").and("be.visible").type(currentAddress);
    cy.get("#permanentAddress").should("exist").and("be.visible").type(permanentAddress);
    cy.get("#submit").should("exist").and("be.visible").click();
  }
  getOutputData(){
    return cy.get("div#output").should("be.visible");
  }
}
