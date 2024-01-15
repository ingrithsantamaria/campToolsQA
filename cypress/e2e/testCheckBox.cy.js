import { Checkbox } from "../pages/checkbox";
const checkBox = new Checkbox();
describe ("Display and mark checkbox", () => {
    beforeEach(() => {
        checkBox.navigateCheckbox();
    })
    it("Should explain and select a checkbox", () => {
        checkBox.expandMainToggle();
        checkBox.checkRandomCheckbox();
        checkBox.messageResult();
        //checkBox.explainChildrenToggle();
    })
})