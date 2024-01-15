import { Link } from "../pages/link";
const linkHome = new Link();
describe("Should click on links", () => {
    beforeEach(() => {
        linkHome.navigateLink();
    })
    it("User clicks on the home link", () => {
        cy.window().then((win) => {
            const numberWindowsBefore = win.window.length;
            linkHome.validateLinkHome();
            cy.window().should("have.property", "length", numberWindowsBefore + 1);
        })
    })
})