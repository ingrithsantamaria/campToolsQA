export class Menu {
    navigateMenu() {
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
          cy.visit("/menu");
    }
    parentMainItem1(){
        return cy.get("#nav").contains('a', 'Main Item 1')
    }
    hoverOverParentMainItem1() {
        this.parentMainItem1().should("exist").and("be.visible").trigger('mouseover');
    }
    parentMainItem2(){
        return cy.get("#nav").contains('a', 'Main Item 2')
    }
    subMenu1(){
        return cy.get("ul li a").contains('Sub Item').eq(0)
    }
    subMenu2(){
        return cy.get("ul li a").contains('Sub Item').eq(1)
    }
    subSubList(){
        return cy.get("ul li a").contains('SUB SUB LIST »')
    }
       selectSubItem2(){
        this.subMenu1().trigger('mouseover', {force: true});
    }
    hoverOverParentMainItem2() {
        this.parentMainItem2().should("exist").and("be.visible").trigger('mouseover');
    }
    selectSubItem1(){
        this.subMenu1().trigger('mouseover', {force: true});
    }
    selectSubItem2(){
        this.subMenu1().trigger('mouseover', {force: true});
    }
    selectSubSubList(){
        this.subSubList().trigger('mouseover', {force: true});
    }
    parentMainItem3(){
        return cy.get("#nav").contains('a', 'Main Item 3')
    }
    hoverOverParentMainItem3() {
        this.parentMainItem3().should("exist").and("be.visible").trigger('mouseover');
    }
}