export class GetMethod{
    navigateGetMethod(){
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
    }
    performGET(url) {
        cy.request('GET', url).as('getResponse');
      }
      validateResponse() {
        cy.get('@getResponse').its('status').should('eq', 200);
        cy.get('@getResponse').its('body.books').should('be.an', 'array');
        cy.get('@getResponse').its('body.books[0].title').should('be.a', 'string');
        cy.get('@getResponse').its('body.books[1].title').should('be.a', 'string');
        cy.get('@getResponse').its('body.books[0].title').then((title) => {
          cy.log('Valor de TITLE:', title);
          console.log('Valor de TITLE:', title);
        });
        cy.get('@getResponse').its('body.books[1].title').then((title) => {
            cy.log('Valor de TITLE:', title);
            console.log('Valor de TITLE:', title);
          });
      }
}