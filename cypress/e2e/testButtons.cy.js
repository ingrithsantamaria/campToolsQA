import { Buttons } from "../pages/buttons";
const buttons = new Buttons();
describe("Double click on button", () => {
    it ("Should doble click", () => {
        buttons.navigateButtons();
        buttons.dobleClickOnButton();
        buttons.getMessageDblClickButton("You have done a double click");
    })
});
describe("Click Right Button", () => {
    it ("Should clcik to the right button", () => {
        buttons.navigateButtons();
        buttons.clickRightOnButton();
        buttons.getMessageRightClick("You have done a right click");
    })
});
describe("One click on button", () => {
    it("Should one click on button", () => {
        buttons.navigateButtons();
        buttons.getOneClickButton();
        buttons.getMessageOneClick("You have done a dynamic click");
    })
});