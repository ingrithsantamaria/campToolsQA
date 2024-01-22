export class Menu {
    navigateMenu() {
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
          cy.visit("/menu");
    }
    parentMenu(){
        return cy.get("a").contains("Main Item 2")
    }
    subMenu(){
        return cy.get("ul li a").contains("Sub Item:visible", { timeout: 40000 })
    }
    hoverOverSubMenu() {
        this.parentMenu().trigger('mouseover');
        this.subMenu().should("exist").click();
    }
}