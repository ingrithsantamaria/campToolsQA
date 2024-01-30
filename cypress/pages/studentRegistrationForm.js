export class StudentRegisForm {
  navigateRegisForm() {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/automation-practice-form")
  }
  validateFieldFirstName(placeholderText) {
    cy.get("#firstName")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
      .and("have.attr", "required")
  }
  validateFieldLastName(placeholderText) {
    cy.get("#lastName")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
      .and("have.attr", "required")
  }
  validateFieldEmail(placeholderText) {
    cy.get("#userEmail")
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
  // validateFieldGenderVisibleElementWithOpacityZero() {
  //     this.getFieldGender().should(($el) => {
  //     const computedStyle = window.getComputedStyle($el[0]);
  //     const opacity = computedStyle.getPropertyValue('opacity');
  //     expect(opacity).to.equal('0');
  //     });
  // }
  validateFieldMobile(placeholderText, value) {
    cy.get("#userNumber")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
      .and('have.attr', 'minlength', value)
      .and('have.attr', 'maxlength', value)
      .and('have.attr', 'required')
  }
  validateFieldDateOfBirth() {
    cy.get("#dateOfBirthInput").should("be.visible")
  }
  validateFieldSubjects(value, text, boolean, valueAutocapitalize) {
    cy.get("div.subjects-auto-complete__value-container").should("be.visible")
    cy.get("input#subjectsInput").should("have.attr", "autocorrect", value)
    .and("have.attr", "aria-autocomplete", text)
    .and("have.attr", "autocomplete", value)
    .and("have.attr", "spellcheck", boolean)
    .and("have.attr", "autocapitalize", valueAutocapitalize)
  }
  validateFieldSelectPicture() {
    cy.get("input#uploadPicture").should("be.exist")
  }
  validateFieldCurrentAddress(placeholderText) {
    cy.get("textarea#currentAddress")
      .should("be.visible")
      .and("have.attr", "placeholder", placeholderText)
  }
  validateFieldState(value, text, boolean, valueAutocapitalize) {
    cy.get('div[id="state"] div').eq(1).should("be.visible")
    cy.get("input#react-select-3-input").should("have.attr", "autocorrect", value)
    .and("have.attr", "aria-autocomplete", text)
    .and("have.attr", "autocomplete", value)
    .and("have.attr", "spellcheck", boolean)
    .and("have.attr", "autocapitalize", valueAutocapitalize)
  }
  validateFieldCity(value, text, boolean, valueAutocapitalize) {
    cy.get('div[id="stateCity-wrapper"] div').eq(11).should("be.visible")
    cy.get("input#react-select-4-input").should("have.attr", "autocorrect", value)
    .and("have.attr", "aria-autocomplete", text)
    .and("have.attr", "autocomplete", value)
    .and("have.attr", "spellcheck", boolean)
    .and("have.attr", "autocapitalize", valueAutocapitalize)
  }
}
