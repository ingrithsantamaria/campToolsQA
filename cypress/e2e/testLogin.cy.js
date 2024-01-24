import { Login } from "../pages/login";
import { Faker, faker } from "@faker-js/faker";
const login = new Login()
const fakeUsername = faker.internet.userName()
const fakePassword = faker.internet.password()
const realUsername = 'tomsmith';
const realPassword = 'SuperSecretPassword!';
beforeEach(() => {
    login.navigateLogin()
})
describe("Should Login", () => {
    it("User should see title and subtitle above the form", () => {
        login.validateTitleAndSubtitleLogin()
    })
    it('User should fill the login form with fake data', () => {
        login.fillLoginForm(fakeUsername, fakePassword);
        login.clickLoginButton()
        login.validateFlashErrorUsername()
      });
    it("User fills out the form with an incorrect username", () => {
        login.fillLoginForm(fakeUsername, realPassword);
        login.clickLoginButton()
        login.validateFlashErrorUsername()
    })
    it("User fills out the form with an incorrect password", () => {
        const fakePassword = faker.internet.password()
        login.fillLoginForm(realUsername, fakePassword);
        login.clickLoginButton()
        login.validateFlashErrorPassword()
    })
      it('User should fill the login form with real data', () => {
        login.fillLoginForm(realUsername, realPassword);
        login.clickLoginButton()
      });
      it('User should see Flash message, Title and Subtitle on the home', () => {
        login.fillLoginForm(realUsername, realPassword);
        login.clickLoginButton()
        login.validateFlashMessageSuccesfullHome()
        login.validateTitleAndSubtitleLogin()
      });
      it('User should logout', () => {
        login.fillLoginForm(realUsername, realPassword);
        login.clickLoginButton()
        login.clickAndValidateLogout()
      });
})