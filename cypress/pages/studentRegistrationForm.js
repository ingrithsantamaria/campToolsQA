export class StudentRegisForm {
  navigateRegisForm() {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/automation-practice-form")
  }
  validateFieldFirstName(placeholderText) {
    return cy.get("#firstName")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
      .and("have.attr", "required")
  }
  validateFieldLastName(placeholderText) {
    return cy.get("#lastName")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
      .and("have.attr", "required")
  }
  validateFieldEmail(placeholderText) {
    return cy.get("#userEmail")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
  }
  validateGenderMale() {
    cy.contains("label", "Male").should("be.visible")
    cy.get("input#gender-radio-1").should("have.attr", "required")
  }
  validateGenderFemale() {
    cy.contains("label", "Female").should("be.visible")
    cy.get("input#gender-radio-2").should("have.attr", "required")
  }
  validateGenderOther() {
    cy.contains("label", "Other").should("be.visible")
    cy.get("input#gender-radio-3").should("have.attr", "required")
  }
  getRadioButtons(){
    return cy.get("input[type=radio]")
  }
  selectRandomRadioButton() {
    this.getRadioButtons().should('exist').then(($radioButtons) => {
        const randomIndex = Math.floor(Math.random() * $radioButtons.length);
        cy.wrap($radioButtons[randomIndex]).click({ force: true });
    })
}
  // validateFieldGenderVisibleElementWithOpacityZero() {
  //     this.getFieldGender().should(($el) => {
  //     const computedStyle = window.getComputedStyle($el[0]);
  //     const opacity = computedStyle.getPropertyValue('opacity');
  //     expect(opacity).to.equal('0');
  //     });
  // }
  validateFieldMobile(placeholderText, value) {
    return cy.get("#userNumber")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
      .and('have.attr', 'minlength', value)
      .and('have.attr', 'maxlength', value)
      .and('have.attr', 'required')
  }
  validateFieldDateOfBirth() {
    return cy.get("#dateOfBirthInput").should("be.visible")
  }
  selectDateRandom() {
    this.validateFieldDateOfBirth().click()
    const today = new Date()
    const randomDate = new Date(today.getTime() + Math.random()* 30 * 24 * 60 * 60 * 1000)
    const formattedDate = `${randomDate.getDate()} ${randomDate.getMonth() + 1}  ${randomDate.getFullYear()}`
    cy.get("div.react-datepicker__month-container").contains(formattedDate).click()
}
  closeDatePicker() {
    cy.get("body").click();
  }
  validateFieldSubjects(value, text, boolean, valueAutocapitalize) {
    cy.get("div.subjects-auto-complete__value-container").should("be.visible")
    cy.get("input#subjectsInput").should("have.attr", "autocorrect", value)
    .and("have.attr", "aria-autocomplete", text)
    .and("have.attr", "autocomplete", value)
    .and("have.attr", "spellcheck", boolean)
    .and("have.attr", "autocapitalize", valueAutocapitalize)
  }
  // validateFieldHobbies(){
  //   return cy.get("div.col-md-9 col-sm-12").should("be.visible")
  // }
  // selectCheckRandomCheckbox() {
  //   this.validateFieldHobbies().should('exist').then((parentCheckboxes) => {
  //     const totalParentCheckboxes = parentCheckboxes.length;
  //     const randomParentIndex = Cypress._.random(0, totalParentCheckboxes - 1);
  //     this.validateFieldHobbies().eq(randomParentIndex).click();
  //   });
  // }
  validateFieldSelectPicture() {
    return cy.get("input#uploadPicture").should("be.exist")
  }
  uploadFile(filePath){
    this.validateFieldSelectPicture().selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.txt',
      lastModified: Date.now(),
    })
  }
  validateFieldCurrentAddress(placeholderText) {
    return cy.get("textarea#currentAddress")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
  }
  get identifersSelectState(){
    return [
      "react-select-3-option-0",
      "react-select-3-option-1",
      "react-select-3-option-2",
      "react-select-3-option-3",
    ];
  }
  get identifiersSelectCity(){
    return [
      "react-select-4-option-0",
      "react-select-4-option-1",
      "react-select-4-option-2",
    ];
  }
  getRandomIdSelects(dropdownIdentifier) {
    const identifiers = this[`identifiers${dropdownIdentifier}`];
    const randomIndex = Math.floor(Math.random() * identifiers.length);
    return identifiers[randomIndex];
  }
  clickIdSelects(id) {
    cy.get(`#${id}`).click();
  }
  selectRandomIdSelects(dropdownIdentifier) {
    const randomId = this.getRandomIdSelects(dropdownIdentifier);
    this.clickIdSelects(randomId);
  }
  validateFieldState(value, text, boolean, valueAutocapitalize) {
    cy.get('div[id="state"] div').eq(1).should("be.visible")
    cy.get("input#react-select-3-input").should("have.attr", "autocorrect", value)
    .and("have.attr", "aria-autocomplete", text)
    .and("have.attr", "autocomplete", value)
    .and("have.attr", "spellcheck", boolean)
    .and("have.attr", "autocapitalize", valueAutocapitalize)
    .click()
  }
  validateFieldCity(value, text, boolean, valueAutocapitalize) {
    cy.get('div[id="stateCity-wrapper"] div').eq(11).should("be.visible")
    cy.get("input#react-select-4-input").should("have.attr", "autocorrect", value)
    .and("have.attr", "aria-autocomplete", text)
    .and("have.attr", "autocomplete", value)
    .and("have.attr", "spellcheck", boolean)
    .and("have.attr", "autocapitalize", valueAutocapitalize)
    .click()
  }
  fillFieldsForm(firstName, lastName, email, number, currentAddress){
    cy.get("#firstName").type(firstName)
    cy.get("#lastName").type(lastName)
    cy.get("#userEmail").type(email)
    cy.get("#userNumber").type(number)
    cy.get("textarea#currentAddress").type(currentAddress)
  }
}
