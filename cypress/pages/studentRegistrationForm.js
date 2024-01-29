export class StudentRegisForm{
    navigateRegisForm(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
          cy.visit("/automation-practice-form");
    }
    validateFieldFirstName(placeholderText){
        cy.get("#firstName").should("be.visible").and('have.attr', 'placeholder', placeholderText)
    }
    validateFieldLastName(placeholderText){
        cy.get("#lastName").should("be.visible").and('have.attr', 'placeholder', placeholderText)
    }
    validateFieldEmail(){
        cy.get("#userEmail").should("be.visible")
    }
    getFieldGender(){
       return cy.get("input[name=gender]")
    } 
    validateGenderMale(){
        cy.contains('label', 'Male').should("be.visible")
    }
    validateGenderFemale(){
        cy.contains('label', 'Female').should("be.visible")
    }
    validateGenderOther(){
        cy.contains('label', 'Other').should("be.visible")
    }
    // validateFieldGenderVisibleElementWithOpacityZero() {
    //     this.getFieldGender().should(($el) => {
    //     const computedStyle = window.getComputedStyle($el[0]);
    //     const opacity = computedStyle.getPropertyValue('opacity');
    //     expect(opacity).to.equal('0');
    //     });
    // }
    validateFieldMobile(){
        cy.get("#userNumber").should("be.visible")
    }
    validateFieldDateOfBirth(){
        cy.get("#dateOfBirthInput").should("be.visible")
    }
    validateFieldSubjects(){
        cy.get('div.subjects-auto-complete__value-container').should("be.visible")
    }
    validateFieldSelectPicture(){
        cy.get('input#uploadPicture').should("be.exist")
    }
    validateFieldCurrentAddress(){
        cy.get('textarea#currentAddress').should("be.visible")
    }
    validateFieldState(){
        cy.get('div[id="state"] div').eq(1).should("be.visible")
    }
    validateFieldCity(){
        cy.get('div[id="stateCity-wrapper"] div').eq(11).should("be.visible")
    }
}