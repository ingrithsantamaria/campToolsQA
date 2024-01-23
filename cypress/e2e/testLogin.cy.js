import { Login } from "../pages/login";
import { Faker, faker } from "@faker-js/faker";
const login = new Login()
beforeEach(() => {
    login.navigateLogin()
})
describe("Should Login", () => {
    it('User should fill the login form with fake data', () => {
        const fakeUsername = faker.internet.userName()
        const fakePassword = faker.internet.password()
        login.fillLoginForm(fakeUsername, fakePassword);
        login.clickLoginButton()
        const errorMessage = login.getErrorMessage()
        expect(errorMessage).to.contain("Your username is invalid!")
      });
    
      it('User should fill the login form with real data', () => {
        const realUsername = 'tomsmith';
        const realPassword = 'SuperSecretPassword!';
        login.fillLoginForm(realUsername, realPassword);
        login.clickLoginButton()
      });
})