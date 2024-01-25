import { Menu } from "../pages/menu"
const menu = new Menu()
beforeEach(() => {
    menu.navigateMenu()
})
describe("Should hover Over on the all menu", () => {
    it("User hover Over on the menu 1", () => {
        menu.hoverOverParentMainItem1()
    })
    it("User hover Over on the menu 2", () => {
        menu.hoverOverParentMainItem2()
    })
    it("User hover Over on the menu 2 and hover Over first Sub menu", () => {
        menu.hoverOverParentMainItem2()
        menu.selectSubItem1()
    })
    it("User hover Over on the menu 2 and hover Over second Sub menu", () => {
        menu.hoverOverParentMainItem2()
        menu.selectSubItem2()
    })
    it("User hover Over on the menu 2 and hover Over third Sub sub List", () => {
        menu.hoverOverParentMainItem2()
        menu.selectSubSubList()
    })
    it("User hover Over on the menu 3", () => {
        menu.hoverOverParentMainItem3()
    })
})