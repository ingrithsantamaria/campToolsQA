import { faker } from "@faker-js/faker/locale/en";
import { TextBox } from "../pages/textBox";
const textBox = new TextBox();
describe("Automation text box", () => {
    beforeEach(() => {
        textBox.navigate();
    })
    it("Should Validate correct data ", () => {
        textBox.formtextBox(
            faker.person.fullName(),
            faker.internet.email(),
            `${faker.location.ordinalDirection()} ${faker.location.city()} ${faker.location.secondaryAddress()}`,
            `${faker.location.ordinalDirection()} ${faker.location.city()} ${faker.location.secondaryAddress()}`,
        );
        textBox.getOutputData();
    })
})