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
  getMessageDblClickButton(youHaveDoneAdoubleClick) {
    cy.contains("#doubleClickMessage", youHaveDoneAdoubleClick, { matchCase: false } ).should("be.visible");
  }
  getRightButton() {
    return cy.get("#rightClickBtn");
  }
  clickRightOnButton() {
    this.getRightButton().should("be.visible", {timeout: 3000}).rightclick();
  }
  getMessageRightClick(youHaveDoneArightClick) {
    cy.contains("#rightClickMessage", youHaveDoneArightClick, { matchCase: false } ).should("be.visible");
  }
  getOneClickButton() {
    return cy.get("button:eq(3)").click();
  }
  getMessageOneClick(youHaveDoneAdynamicClick){
    cy.contains("#dynamicClickMessage", youHaveDoneAdynamicClick, { matchCase: false } ).should("be.visible");
  }
}