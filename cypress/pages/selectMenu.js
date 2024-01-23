export class SelectMenu {
  navigateSelectMenu() {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/select-menu");
  }
  validateAndClickContainerSelectValue() {
    cy.get('div[id="withOptGroup"] div')
      .eq(1)
      .should("exist")
      .and("be.visible")
      .click();
    cy.get("#react-select-2-group-0-heading")
      .should("exist")
      .and("be.visible")
      .contains("Group 1");
    cy.get("#react-select-2-group-1-heading")
      .should("exist")
      .and("be.visible")
      .contains("Group 2");
  }
  validateAndClickContainerSelectOne(){
    cy.get('div[id="selectOne"] div').eq(1).should("exist").and("be.visible").click()
  }
  get possibleIdentifiersSet1() {
    return [
      "react-select-2-option-0-0",
      "react-select-2-option-0-1",
      "react-select-2-option-1-0",
      "react-select-2-option-1-1",
      "react-select-2-option-2",
      "react-select-2-option-3",
    ];
  }
  get possibleIdentifiersSet2() {
    return [
      "react-select-3-option-0-0",
      "react-select-3-option-0-1",
      "react-select-3-option-0-2",
      "react-select-3-option-0-3",
      "react-select-3-option-0-4",
      "react-select-3-option-0-5",
    ];
  }
  getRandomId(set){
    const possibleIdentifiers = this[`possibleIdentifiersSet${set}`]
    const randomIndex = Math.floor(Math.random() * possibleIdentifiers.length)
    return possibleIdentifiers[randomIndex]
  }
  actionWithId(id){
    cy.get(`#${id}`).click()
  }
  actionWithRandomId(set){
    const randomId = this.getRandomId(set)
    this.actionWithId(randomId)
  }
}
