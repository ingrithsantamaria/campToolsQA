export class ModalDialog {
    navigateModal(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
        cy.visit("/modal-dialogs");
    }
    getSmallModalButton(){
        return cy.get("#showSmallModal")
    }
    validateClickOnSmallModal(){
        this.getSmallModalButton().should("exist").click();
    }
    getOpenSmallModal(text){
        cy.get(".modal-content").should("exist").and("be.visible");
        cy.get("#example-modal-sizes-title-sm").should("exist").and("be.visible");
        cy.get(".modal-body").should("include.text", text)
    }
    getCloseSmallModalButton(){
        cy.get("#closeSmallModal").should("exist").and("be.visible").click();
    }
    getLargeModalButton(){
        return cy.get("#showLargeModal")
    }
    validateClickOnLargeModal(){
        this.getLargeModalButton().should("exist").and("be.visible").click()
    }
    getOpenLargeModal(text){
        cy.get(".modal-content").should("exist").and("be.visible");
        cy.get("#example-modal-sizes-title-lg").should("exist").and("be.visible");
        cy.get("p").should("not.be.empty").and("be.visible")
    }
    getCloseLargeModalButton(){
        cy.get("#closeLargeModal").should("exist").and("be.visible").click();
    }
}