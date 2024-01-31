import { StudentRegisForm } from "../pages/studentRegistrationForm";
import { faker } from "@faker-js/faker/locale/en";
const regisForm = new StudentRegisForm()
beforeEach(() => {
    regisForm.navigateRegisForm()
});
describe("Should fill out the fields", () => {
    it("User fills out the form fields", () => {
        regisForm.fillFieldsForm(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.phone.number(),
            `${faker.location.ordinalDirection()} ${faker.location.city()} ${faker.location.secondaryAddress()}`
        )
        regisForm.selectRandomRadioButton()
        //regisForm.selectCheckRandomCheckbox()
        //regisForm.selectDateRandom("dateOfBirthInput")
        //regisForm.closeDatePicker()
        regisForm.uploadFile()
        regisForm.selectRandomIdSelects("SelectState")
        regisForm.selectRandomIdSelects("SelectCity")
    })
    it("Validate visibility and attributes of the field First Name", () => {
        regisForm.validateFieldFirstName("First Name")
    })
    it("Validate visibility and attributes of the field Last Name", () => {
        regisForm.validateFieldLastName("Last Name")
    })
    it("Validate visibility and attributes of the field Email", () => {
        regisForm.validateFieldEmail("name@example.com")
    })
    it("Validate visibility and attributes of the field Gender Male", () => {
        regisForm.validateGenderMale()
    })
    it("Validate visibility and attributes of the field Gender Female", () => {
        regisForm.validateGenderFemale()
    })
    it("Validate visibility and attributes of the field Gender Other", () => {
        regisForm.validateGenderOther()
    })
    it("Validate visibility and attributes of the field Mobile", () => {
        regisForm.validateFieldMobile("Mobile Number", 10)
    })
    it("Validate visibility and attributes of the field Date of Birth", () => {
        regisForm.validateFieldDateOfBirth()
    })
    it("Validate visibility and attributes of the field Subjects", () => {
        regisForm.validateFieldSubjects("off", "list", "false", "none")
    })
    it("Validate visibility and attributes of the field Select Picture", () => {
        regisForm.validateFieldSelectPicture()
    })
    it("Validate visibility and attributes of the field Current Address", () => {
        regisForm.validateFieldCurrentAddress("Current Address")
    })
    it("Validate visibility and attributes of the field State", () => {
        regisForm.validateFieldState("off", "list", "false", "none")
    })
    it("Validate visibility and attributes of the field City", () => {
        regisForm.validateFieldCity("off", "list", "false", "none")
    })
})