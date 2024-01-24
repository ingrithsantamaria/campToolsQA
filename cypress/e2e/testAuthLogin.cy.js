import { AuthLogin } from "../pages/authLogin";
const authLogin = new AuthLogin()
const username = 'admin';
const password = 'admin';
const incorrectUsername = 'usuario_incorrecto';
const incorrectPassword = 'contraseña_incorrecta';
describe("Should access with real data", () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: username,
                password: password
            }
        })
    })
    it("User should log in successfully with valid credentials and see the home", () => {
        cy.request({
            url: "https://the-internet.herokuapp.com/basic_auth",
            auth: {
                username: username,
                password: password
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
        authLogin.validateMessageAuthSuccessful()
    })
    it("User should see an error message when entering incorrect credentials", () => {
        cy.request({
            url: "https://the-internet.herokuapp.com/basic_auth",
            auth: {
                username: incorrectUsername,
                password: incorrectPassword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401)
        })
    })
})