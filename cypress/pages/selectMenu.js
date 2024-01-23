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
  validateAndClickContainerSelectOne() {
    cy.get('div[id="selectOne"] div')
      .eq(1)
      .should("exist")
      .and("be.visible")
      .click();
  }
  get identifiersSelectValue() {
    return [
      "react-select-2-option-0-0",
      "react-select-2-option-0-1",
      "react-select-2-option-1-0",
      "react-select-2-option-1-1",
      "react-select-2-option-2",
      "react-select-2-option-3",
    ];
  }
  get identifiersSelectOne() {
    return [
      "react-select-3-option-0-0",
      "react-select-3-option-0-1",
      "react-select-3-option-0-2",
      "react-select-3-option-0-3",
      "react-select-3-option-0-4",
      "react-select-3-option-0-5",
    ];
  }
  getRandomIdSelects(dropdownIdentifier) {
    const identifiers = this[`identifiers${dropdownIdentifier}`];
    const randomIndex = Math.floor(Math.random() * identifiers.length);
    return identifiers[randomIndex];
  }
  clickAndValidateIdSelects(id) {
    cy.get(`#${id}`).should("exist").and("be.visible").click();
  }
  selectRandomIdSelects(dropdownIdentifier) {
    const randomId = this.getRandomIdSelects(dropdownIdentifier);
    this.clickAndValidateIdSelects(randomId);
  }
  validateOldStyleSelectMenu() {
    cy.get("select#oldSelectMenu").should("exist").and("be.visible");
  }
  selectRandomOptionFromOldStyleSelectMenu(selector) {
    cy.get(selector)
      .find("option")
      .then((options) => {
        if (options.length > 0) {
          const randomIndex = Math.floor(Math.random() * options.length);
          const randomOptionValue = options.eq(randomIndex).val();
          cy.get(selector).select(randomOptionValue);
        } else {
          cy.log("No options found in the dropdown");
        }
      });
  }
    clickAndValidateMultiSelect(){
      return cy.get('div[class*="css-"]').eq(16).should("exist").click()
    }
  get identifiersIdsMultipleSelect() {
    return [
      "react-select-4-option-0",
      "react-select-4-option-1",
      "react-select-4-option-2",
      "react-select-4-option-3",
    ];
  }
  getMultipleRandomIds(count){
    if(this.identifiersIdsMultipleSelect.length >= count){
        const randomIndices = Array.from({length: count}, () => {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * this.identifiersIdsMultipleSelect.length)
            } while (randomIndices.includes(randomIndex))
            return randomIndex
        })
        const randomIds = randomIndices.map(index => this.identifiersIdsMultipleSelect[index])
        return randomIds
    }else {
        cy.log("Not enough possible IDs")
        return []
    }
  }
  clickAndValidateMultipleId(id){
    cy.get(`#${id}`).should("exist").click()
  }
  selectRandomMultipleIds(count){
    const randomIds = this.getMultipleRandomIds(count)
    randomIds.forEach(id => {
        this.clickAndValidateMultipleId(id)
    })
  }
}
