
const FIRST_NAME = '#forename'
const LAST_NAME = '#surname'
const EMAIL_ADDRESS = '#emailAddress'
const PHONE_NUMBER = '#phoneNumber'
const POSTAL_CODE = '#postalCode'
const BUTTON = 'button'
const ADDRESS_SELECTION = '#addressSelection'
const CONTINUE_BUTTON = '[type=submit]'
const COUNTRY_FIELD = '#country'

class DetailsPage {

    //GET
    static getFirstName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(FIRST_NAME);
    };

    static getLastName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(LAST_NAME);
    };

    static getEmailAddress(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(EMAIL_ADDRESS);
    };

    static getPhoneNumber(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PHONE_NUMBER);
    };

    static getPostalCode(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(POSTAL_CODE);
    };

    static getFindAddressButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BUTTON).contains('Find address');
    };

    static getAddressSelection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ADDRESS_SELECTION);
    };

    static getContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CONTINUE_BUTTON);
    };

    static getCountryField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(COUNTRY_FIELD);
    };

    //TYPE
    static typeFirstName(firstName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getFirstName().clear().type(firstName);
    };

    static typeLastName(lastName): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getLastName().clear().type(lastName);
    };

    static typeEmailAddress(email: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getEmailAddress().clear().type(email);
    };

    static typePhoneNumber(phone: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getPhoneNumber().clear().type(phone);
    };

    static typePostCode(postCode: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getPostalCode().clear().type(postCode);
    };

    //CLICK
    static clickOnFindAddressButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getFindAddressButton().click();
    };

    static clickOnContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        this.countryIsVisible();
        return this.getContinueButton().click();
    };

    //SELECT
    static selectAddress(address: string ): Cypress.Chainable<JQuery<HTMLElement>> {
        this.addressSelectionIsVisible();
        return this.getAddressSelection().select(address);
    };

    //ASSERT
    static addressSelectionIsVisible(): void {
        this.getAddressSelection().should('be.visible');
     };

     static countryIsVisible(): void {
        this.getCountryField().should('be.visible');
     };

}
export default DetailsPage;