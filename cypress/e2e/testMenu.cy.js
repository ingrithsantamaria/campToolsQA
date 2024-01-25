import { Menu } from "../pages/menu"
const menu = new Menu()
beforeEach(() => {
    menu.navigateMenu()
})
describe("Should click on the menu 2", () => {
    it("User click on the menu 2", () => {
        menu.hoverOverSubMenu()
        menu.selectSubItem1()
    })
})