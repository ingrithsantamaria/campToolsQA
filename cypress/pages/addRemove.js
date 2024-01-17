export class AddRemove {
    navigateHeroku() {
        cy.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
    }
    // getAddDeleteElement(){
    //     cy.get("button:eq(0)").should("exist").click()
    //     cy.get(".added-manually").should("exist").click()

    // }
    addElements(){
        const quantityClicks = 5;
        for (let i = 0; i < quantityClicks; i++) {
         cy.get("button:eq(0)").should("exist").click()
        }
    }
}