export class Buttons {
    navigateButtons(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
        cy.visit("/buttons");
    }
  getDobleClickButton() {
    return cy.get('#doubleClickBtn');
  }
  dobleClickOnButton() {
    this.getDobleClickButton().should("be.visible", {timeout: 3000}).dblclick();
  }
  getMessageDblClickButton(text) {
    cy.contains("#doubleClickMessage", text, { matchCase: false } ).should("be.visible");
  }
  getRightButton() {
    return cy.get("#rightClickBtn");
  }
  clickRightOnButton() {
    this.getRightButton().should("be.visible", {timeout: 3000}).rightclick();
  }
  getMessageRightClick(text) {
    cy.contains("#rightClickMessage", text, { matchCase: false } ).should("be.visible");
  }
  getOneClickButton() {
    return cy.get("button:eq(3)").click();
  }
  getMessageOneClick(text){
    cy.contains("#dynamicClickMessage", text, { matchCase: false } ).should("be.visible");
  }
}