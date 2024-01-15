export class RadioButton {
    navigateRadio(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
        cy.visit("/radio-button");
    }
    getRadioButtons() {
        return cy.get("input[type=radio]:not(:disabled)");
    }
    getDisabledButton () {
        return cy.get("#noRadio").should("be.disabled")
    }
    selectRandomRadioButton() {
        this.getRadioButtons().should('exist').then(($radioButtons) => {
            const randomIndex = Math.floor(Math.random() * $radioButtons.length);
            cy.wrap($radioButtons[randomIndex]).click({ force: true });
        })
    }
      getMessageYvalue() {
        cy.get(".mt-3").should("exist").invoke("text").then((message) => {
            cy.get(".text-success").should("exist").invoke("text").then((value) => {
                const messageConcatenated = `${message.trim()} ${value.trim()}`;
                cy.log(messageConcatenated);
            })
        })
      }
}