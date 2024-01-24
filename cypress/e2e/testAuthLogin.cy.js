import { AuthLogin } from "../pages/authLogin";
const authLogin = new AuthLogin()

describe("Should access with real data", () => {
    beforeEach(() => {
        const username = 'admin';
        const password = 'admin';
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: username,
                password: password
            }
        })
    })
    it("User see title and subtitle on the protected page", () => {
        authLogin.validateMessageAuthSuccessful()
    })
})