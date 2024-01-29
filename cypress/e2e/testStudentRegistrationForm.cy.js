import { StudentRegisForm } from "../pages/studentRegistrationForm";
const regisForm = new StudentRegisForm()
beforeEach(() => {
    regisForm.navigateRegisForm()
});
describe("Should fill out the fields", () => {
    it("Validate that the field FirstName is visible", () => {
        regisForm.validateFieldFirstName("First Name")
    })
    it("Validate that the field lastName is visible", () => {
        regisForm.validateFieldLastName("Last Name")
    })
    it("Validate that the field email is visible", () => {
        regisForm.validateFieldEmail()
    })
    it("Validate that the field gender Male is visible", () => {
        regisForm.validateGenderMale()
    })
    it("Validate that the field gender Female is visible", () => {
        regisForm.validateGenderFemale()
    })
    it("Validate that the field gender Other is visible", () => {
        regisForm.validateGenderOther()
    })
    it("Validate that the field Mobile is visible", () => {
        regisForm.validateFieldMobile()
    })
    it("Validate that the field Date of Birth is visible", () => {
        regisForm.validateFieldDateOfBirth()
    })
    it("Validate that the field Subjects is visible", () => {
        regisForm.validateFieldSubjects()
    })
    it("Validate that the field Select Picture is visible", () => {
        regisForm.validateFieldSelectPicture()
    })
    it("Validate that the field Current Address is visible", () => {
        regisForm.validateFieldCurrentAddress()
    })
    it("Validate that the field State is visible", () => {
        regisForm.validateFieldState()
    })
    it("Validate that the field City is visible", () => {
        regisForm.validateFieldCity()
    })
})