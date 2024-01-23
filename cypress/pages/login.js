export class Login {
  navigateLogin() {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/login");
  }
  usernameInput() {
    return cy.get("#username");
  }

  passwordInput() {
    return cy.get("#password");
  }
  clickLoginButton(){
    cy.get("button[type=submit]").click()
  }
  fillLoginForm(username, password) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
  }
  validateFlashError(){
    return cy.get("#flash").should("exist").and("be.visible")
  }
  getErrorMessage() {
    return this.validateFlashError().text();
  }
}
