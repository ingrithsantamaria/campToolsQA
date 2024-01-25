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
    subMenu1(){
        //return cy.contains('a', 'Sub Item').eq(1)
        return cy.get('a[href="#"]').contains("Main Item 2").contains("Sub Item")
    }
    hoverOverSubMenu() {
        this.parentMenu().trigger('mouseover');
        //this.subMenu1().click();
    }
    selectSubItem1(){
        this.subMenu1().click()
    }
}