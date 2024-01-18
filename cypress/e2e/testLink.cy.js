import { Link } from "../pages/link";
const linkHome = new Link();
describe("Should click on links", () => {
    beforeEach(() => {
        linkHome.navigateLink();
    })
    it("User clicks on the home link", () => {
        linkHome.countWinOpen().then((numWinBefore) => {
            linkHome.openWindowHome("simpleLink")
        linkHome.countWinOpen().then((numWinAfter) => {
            expect(numWinAfter).to.eq(numWinBefore + 1)
        })
    })
    })
    it("User clicks on the home link two", () => {
        linkHome.countWinOpen().then((numWinBefore) => {
        linkHome.openWindowHome("dynamicLink")
        linkHome.countWinOpen().then((numWinAfter) => {
            expect(numWinAfter).to.eq(numWinBefore + 1)
        })
    })
    })
    it("User clicks on Created", () => {
        linkHome.getLinkCreate()
        const keywords = ["201", "Created"]
        linkHome.validateResponseMessage(keywords)
    })
    it("User clicks on no Content", () => {
        linkHome.getLinkNoContent()
        const keywords = ["204", "No Content"]
        linkHome.validateResponseMessage(keywords)
    })
    it("User clicks on Moved", () => {
        linkHome.getLinkMoved()
        const keywords = ["301", "Moved Permanently"]
        linkHome.validateResponseMessage(keywords)
    })
    it("User clicks on Bad Request", () => {
        linkHome.getLinkBadRequest()
        const keywords = ["400", "Bad Request"]
        linkHome.validateResponseMessage(keywords)
    })
    it("User clicks on Unauthorized", () => {
        linkHome.getLinkUnauthorized()
        const keywords = ["401", "Unauthorized"]
        linkHome.validateResponseMessage(keywords)
    }) 
    it("User clicks on Forbidden", () => {
        linkHome.getLinkForbidden()
        const keywords = ["403", "Forbidden"]
        linkHome.validateResponseMessage(keywords)
    })
    it("User clicks on Not Found", () => {
        linkHome.getLinkInvalidUrl()
        const keywords = ["404", "Not Found"]
        linkHome.validateResponseMessage(keywords)
    })
})