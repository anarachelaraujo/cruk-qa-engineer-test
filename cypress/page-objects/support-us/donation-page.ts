
    const AMOUNT_10_BUTTON = 'amount-sel-10'
    const DONATION_TYPE_RADIO = '#typeRadioGroup span '
    const MOTIVATION_DROPDOWN = 'label select'
    const DEDICATION_NAME = '#inMemoryName'
    const SPECIFIC_TYPE_OF_CANCER_RADIO = '#destinationRadioGroup span'
    const SELECT_DROPDOWN = 'select'
    const CONTINUE_BUTTON = '[type=submit]'

class DonationPage {
    //GET
    static getButtonDonationAmount10(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[data-cy=${AMOUNT_10_BUTTON}]`);
    };

    static getRadioDonationFromMyOwnMoney(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(DONATION_TYPE_RADIO).eq(0);
    };

    static getDropdownMotivation(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MOTIVATION_DROPDOWN);
    };

    static getMotivationOption(option: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MOTIVATION_DROPDOWN).contains(option);
    };

    static getDedicationName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(DEDICATION_NAME);
    };

    static getSpecificCancerDestination(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SPECIFIC_TYPE_OF_CANCER_RADIO).eq(2);
    };

    static getSpecificCancerDestinationType(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SELECT_DROPDOWN).eq(1);
    };

    static getCancerTypeOption(option: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains(option);
    };

    static getContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CONTINUE_BUTTON);
    };

    //CLICK
    static clickOnAmount10(): Cypress.Chainable<JQuery<HTMLElement>> {
       return this.getButtonDonationAmount10().click();
    };

    static clickOnDonationFromMyOwnMoney(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getRadioDonationFromMyOwnMoney().click();
    };

    static clickOnRadioSpecificCancerDestination(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getSpecificCancerDestination().click();
    };

   
    //SELECT
    static clickOnContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getContinueButton().click();
    };

    static selectSpecificCancerDestination(type: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getSpecificCancerDestinationType().select(type);
    };

    static selectMotivationOption(option: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getDropdownMotivation().select(option);
    };

}
export default DonationPage;