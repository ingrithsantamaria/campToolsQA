import { RadioButton } from "../pages/radioButton";
const radioButton = new RadioButton();
describe("Should select a random radioButton", () => {
    beforeEach(() => {
        radioButton.navigateRadio()
    })
    it("Mark radioButton at random", () => {
        //cy.viewport("iphone-x");
        radioButton.navigateRadio();
        radioButton.selectRandomRadioButton();
        radioButton.getDisabledButton();
        radioButton.getMessageYvalue();
    })
})