export class Login {
  navigateLogin() {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://the-internet.herokuapp.com/login");
  }
  validateTitleAndSubtitleLogin(){
    cy.get("h2").should("be.visible").and("not.be.empty")
    cy.get("h4").should("be.visible").and("not.be.empty")
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
  validateFlashErrorUsername(){
    return cy.get("#flash").should("exist").and("be.visible").and("not.be.empty").contains("Your username is invalid!")
  }
  validateFlashErrorPassword(){
    return cy.get("#flash").should("exist").and("be.visible").and("not.be.empty").contains("Your password is invalid!")
  }
  validateFlashMessageSuccesfullHome(){
    cy.get("#flash-messages").should("exist").and("be.visible").and("not.be.empty").contains("You logged into a secure area!")
  }
  clickAndValidateLogout(){
    cy.get('a[href="/logout"]').should("exist").click()
  }
}
