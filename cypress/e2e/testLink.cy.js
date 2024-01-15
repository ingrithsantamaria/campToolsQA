import { Link } from "../pages/link";
const linkHome = new Link();
function validationRedirect(object, something){
    cy.window().then((winHome) => {
        const numberWindowsBefore = winHome.window.length;
        something.call(object);
        cy.window().should("have.property", "length", numberWindowsBefore + 1);
    })
}
describe("Should click on links", () => {
    beforeEach(() => {
        linkHome.navigateLink();
    })
    it("User clicks on the home link", () => {
        validationRedirect(linkHome, linkHome.validateLinkHome)
    })
    it("User clicks on the home link two", () => {
        validationRedirect(linkHome, linkHome.validateLinkHomeTwo)
    })
    it("User clicks on Created", () => {
        linkHome.getLinkCreate()
        linkHome.validateResponse()
    })
    it("User clicks on no Content", () => {
        linkHome.getLinkNoContent()
        linkHome.validateResponse()
    })
    it("User clicks on Moved", () => {
        linkHome.getMoved()
        linkHome.validateResponse()
    })
})