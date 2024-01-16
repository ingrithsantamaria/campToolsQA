export class Tabs {
    navigateTabs(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
        cy.visit("/tabs");
    }
    getWhatTabs() {
        cy.get("#demo-tab-what").should("exist").and("be.visible").click()
    }
    getOriginTabs() {
        cy.get("#demo-tab-origin").should("exist").and("be.visible").click()
    }
    getUseTabs() {
        cy.get("#demo-tab-use").should("exist").and("be.visible").click()
    }
    // getMoreTabs() {
    //     cy.get("a[role=tab][aria-disabled=true]").should("be.disabled")
    // }
}