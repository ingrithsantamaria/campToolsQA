import { ModalDialog } from "../pages/modalDialogs";
const modalDialog = new ModalDialog();
describe("Should click on the butttons to open modals", () => {
    beforeEach(() => {
        modalDialog.navigateModal();
    })
    it("User click on the Small modal button", () => {
        modalDialog.validateClickOnSmallModal();
        modalDialog.getOpenSmallModal("This is a small modal. It has very less content");
        modalDialog.getCloseSmallModalButton();
    })
    it("User click on the Large modal button", () => {
        modalDialog.validateClickOnLargeModal();
        modalDialog.getOpenLargeModal();
        modalDialog.getCloseLargeModalButton();
    })
})