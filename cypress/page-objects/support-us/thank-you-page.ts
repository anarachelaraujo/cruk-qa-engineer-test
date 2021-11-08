const THANK_YOU_MESSAGE = 'h2'
const REFERENCE_NUMBER_MESSAGE = 'strong'
const API_TRANSACTION = ''

class ThankYouPage {
    //GET
    static getThankYouMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(THANK_YOU_MESSAGE).eq(0);
    };

    static getReferenceNumber(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(REFERENCE_NUMBER_MESSAGE);
    };

    //SHOULD
    static assertThankYouMessage(firstName: string, amount: string): void {
        ThankYouPage.getThankYouMessage().should('have.text', `Thank you ${firstName} for your donation of £${amount}`);
    };

    static assertReferenceNumber(): void {
       cy.intercept('POST', 'https://api.pws.int.cruk.org/braintree/graphql/transaction').as('referenceNumber');
       cy.wait('@referenceNumber').its('response.body').then((response) => {
           ThankYouPage.getReferenceNumber().should('have.text', response.id);
         });
    };


}
export default ThankYouPage;