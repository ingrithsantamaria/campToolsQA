import { SelectMenu } from "../pages/selectMenu";
const selectMenu = new SelectMenu();
beforeEach(() => {
  selectMenu.navigateSelectMenu();
});
describe("Should fill out the fields", () => {
  it("User clicks on the container select value to display the options ", () => {
    selectMenu.validateAndClickContainerSelectValue();
  });
  it("User clicks on one of the options of select value", () => {
    selectMenu.validateAndClickContainerSelectValue();
    selectMenu.selectRandomIdSelects("SelectValue");
  });
  it("User clicks on the container select one to display the options ", () => {
    selectMenu.validateAndClickContainerSelectOne();
  });
  it("User clicks on one of the options of select one", () => {
    selectMenu.validateAndClickContainerSelectOne();
    selectMenu.selectRandomIdSelects("SelectOne");
  });
  it("User clicks on the container Old Style Select Menu to display the options ", () => {
    selectMenu.validateOldStyleSelectMenu();
  });
  it("should select a random option from the old select Menu", () => {
    const dropdownSelector = "select#oldSelectMenu";
    selectMenu.selectRandomOptionFromOldStyleSelectMenu(dropdownSelector);
  });
  it("should select multiple random options from the div", () => {
    selectMenu.clickAndValidateMultiSelect()
    const numberOfIdsToUse = 3;
    selectMenu.selectRandomMultipleIds(numberOfIdsToUse);
  });
});
