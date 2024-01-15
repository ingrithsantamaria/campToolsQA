export class TextBox {
  navigate() {
    cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    cy.visit("/text-box");
  }
  formtextBox(fullName, email, currentAddress, permanentAddress) {
    cy.get("#userName").type(fullName);
    cy.get("#userEmail").type(email);
    cy.get("#currentAddress").type(currentAddress);
    cy.get("#permanentAddress").type(permanentAddress);
    cy.get("#submit").click();
  }
  getOutputData(){
    return cy.get("div#output").should("be.visible");
  }
}
