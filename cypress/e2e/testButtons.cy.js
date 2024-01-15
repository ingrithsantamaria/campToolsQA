import { Buttons } from "../pages/buttons";
const buttons = new Buttons();
describe("User should click on the buttons", () => {
    it ("Should doule click button", () => {
        buttons.navigateButtons();
        buttons.dobleClickOnButton();
        buttons.getMessageDblClickButton("You have done a double click");
    });
    it ("Should click to the right button", () => {
        buttons.navigateButtons();
        buttons.clickRightOnButton();
        buttons.getMessageRightClick("You have done a right click");
    });
    it("Should one click on button", () => {
        buttons.navigateButtons();
        buttons.getOneClickButton();
        buttons.getMessageOneClick("You have done a dynamic click");
    })
});
