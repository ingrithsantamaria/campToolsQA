export class AddRemove {
    navigateHeroku() {
        cy.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
    }
    addElements(){
        const quantityClicks = 5;
        for (let i = 0; i < quantityClicks; i++) {
         cy.get("button:eq(0)").should("exist").click()
        }
    }
    getDeleteButton(){
        return cy.get("#elements button:contains(Delete)")
    }
    clickDeleteButtons(){
        this.getDeleteButton().should("exist").click({multiple: true})
    }
    validateDivWithoutElements(){
        return cy.get("#elements button:contains(Delete)").should("not.exist")
    }
}