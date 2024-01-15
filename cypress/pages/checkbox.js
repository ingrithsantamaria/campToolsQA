export class Checkbox {
    navigateCheckbox() {
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
        cy.visit("/checkbox");
    }
    getMainToggle() {
      return cy.get("button[title=Toggle]");
    }
    expandMainToggle() {
      this.getMainToggle().click();
    }
    getCheckboxes() {
        return cy.get('.rct-checkbox'); 
      }
      checkRandomCheckbox() {
        this.getCheckboxes().should('exist').then((parentCheckboxes) => {
          const totalParentCheckboxes = parentCheckboxes.length;
          const randomParentIndex = Cypress._.random(0, totalParentCheckboxes - 1);
          this.getCheckboxes().eq(randomParentIndex).click();
          const childCheckboxes = parentCheckboxes
            .eq(randomParentIndex)
            .find('.rct-checkbox'); 
          const totalChildCheckboxes = childCheckboxes.length;
          const randomChildIndex = Cypress._.random(0, totalChildCheckboxes - 1);
          childCheckboxes.eq(randomChildIndex).click();
        });
      }
      messageResult() {
        cy.get("#result").should("exist").invoke("text").then((message) => {
          cy.get(".text-success").should("exist").invoke("text").then((value) => {
            const messageConcatenated = `${message.trim()} ${value.trim()}`;
            cy.log(messageConcatenated);
          })
        })
      }
    }

