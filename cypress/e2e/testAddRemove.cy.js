import { AddRemove } from "../pages/addRemove";
const addRemove = new AddRemove()
beforeEach(() => {
    addRemove.navigateHeroku()
})
describe("Should click in Add and next remove", () => {
    it("Click in Add Element and next delete", () => {
        addRemove.clickAddElements()
        addRemove.clickDeleteButtons()
        addRemove.validateDivWithoutElements()
    })
})