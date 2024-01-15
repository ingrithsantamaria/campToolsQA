export class Link {
    navigateLink() {
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
    cy.visit("/links");
    }
    getLinkHome() {
        return cy.get("#simpleLink")
    }
    validateLinkHome() {
        this.getLinkHome().should("exist").and("be.visible").click();
    }
    getLinkHomeTwo(){
        return cy.get("#dynamicLink")
    }
    validateLinkHomeTwo(){
        this.getLinkHomeTwo().should("exist").and("be.visible").click();
    }
    getLinkCreate(){
        cy.get("#created").should("exist").and("be.visible").click()
    }
    validateResponse(){
        cy.get("#linkResponse").should("exist").and("be.visible")
    }
    getLinkNoContent(){
        cy.get("#no-content").should("exist").and("be.visible").click();
    }
    getMoved(){
        cy.get("#moved").should("exist").and("be.visible").click();
    }
    // getBadRequest(){

    // }
}