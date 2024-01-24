export class AuthLogin{
    navigateAuthLogin() {
        cy.on("uncaught:exception", (err, runnable) => {
          return false;
        });
      }
    validateMessageAuthSuccessful(){
        cy.get("h3").should("exist").and("be.visible").contains("Basic Auth")
    }
}