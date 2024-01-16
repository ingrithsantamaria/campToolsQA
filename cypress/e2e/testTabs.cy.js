import { Tabs } from "../pages/tabs";
const listTabs = new Tabs()
describe("Select an option from the tab menu at random ", () => {
    beforeEach(() => {
        listTabs.navigateTabs()
    })
    it("User select an option What", () => {
        listTabs.getWhatTabs()
        listTabs.validateText()
    })
    it("User select an option Origin", () => {
        listTabs.getOriginTabs()
        listTabs.validateText()
    })
    it("User select an option Use", () => {
        listTabs.getUseTabs()
        listTabs.validateText()
    })
    it("Validate option More disabled",() => {
        listTabs.getMoreTabs()
    })
})