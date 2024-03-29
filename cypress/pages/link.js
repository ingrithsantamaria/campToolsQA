export class Link {
    navigateLink() {
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
    cy.visit("/links");
    }
    openWindowHome(linkId){
        cy.get(`#${linkId}`).should("exist").click()
    }
    countWinOpen(){
        return cy.window().its("length")
    }
    getLinkCreate(){
        cy.get("#created").should("exist").and("be.visible").click()
    }
    getLinkNoContent(){
        cy.get("#no-content").should("exist").and("be.visible").click();
    }
    getLinkMoved(){
        cy.get("#moved").should("exist").and("be.visible").click();
    }
    getLinkBadRequest(){
        cy.get("#bad-request").should("exist").and("be.visible").click()
    }
    getLinkUnauthorized(){
        cy.get("#unauthorized").should("exist").and("be.visible").click();
    }
    getLinkForbidden(){
        cy.get("#forbidden").should("exist").and("be.visible").click();
    }
    getLinkInvalidUrl(){
        cy.get("#invalid-url").should("exist").and("be.visible").click()
    }
    validateResponseMessage(keywords){
        cy.get("#linkResponse").should("exist").and("be.visible").then(($message) => {
            const textMessage = $message.text();
            keywords.forEach((word) => {
                expect(textMessage).to.include(word);
            });
        })
    }
}