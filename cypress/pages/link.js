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
        this.getLinkHome().should("be.visible").click();
    }
}