import { SelectMenu } from "../pages/selectMenu"
const selectMenu = new SelectMenu()
beforeEach(() => {
    selectMenu.navigateSelectMenu()
})
describe("Should fill out the fields", () => {
    it("User clicks on the container select value to display the options ", () => {
        selectMenu.validateAndClickContainerSelectValue()
    })
    it("User clicks on one of the options of select value", () => {
        selectMenu.validateAndClickContainerSelectValue()
        selectMenu.actionWithRandomId(1)
    })
    it("User clicks on one of the options of select one", () => {
        selectMenu.validateAndClickContainerSelectOne()
        selectMenu.actionWithRandomId(2)
    })
    it("User clicks on the container Old Style Select Menu to display the options ", () => {
        selectMenu.validateOldStyleSelectMenu()
    })
})