import { CompletionTriggerKind } from "typescript"

const PAYMENT_RADIO_GROUP = '#paymentRadioGroup span'
const CREDIT_CARD_HOLDER_NAME = '#cardholderName'
const CREDIT_CARD_NUMBER = '#braintree-hosted-field-number'
const CREDIT_CARD_EXPIRY_DATE = '#braintree-hosted-field-expirationDate'
const CREDIT_CARD_SECURITY_CODE = '#braintree-hosted-field-cvv'
const CREDIT_CARD_NUMBER_FIELD = '#credit-card-number'
const CREDIT_CARD_EXPIRY_DATE_FIELD = '#expiration'
const CREDIT_CARD_SECURITY_CODE_FIELD = '#cvv' 
const GIFT_AID = '[for=giftAid1]'
const COMPLETE_MY_DONATION_BUTTON ='[type=submit]'


class PaymentPage {
    //GET
    static getCreditCardOption(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(PAYMENT_RADIO_GROUP).eq(0);
    };

    static getCreditCardHolderName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CREDIT_CARD_HOLDER_NAME);
    };

    static getGiftAidYes(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(GIFT_AID);
    };

    static getCompleteMyDonationButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(COMPLETE_MY_DONATION_BUTTON);
    };

    //CLICK
    static clickOnCreditCardOption(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getCreditCardOption().click();
    };

    static clickOnGiftAidYes(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getGiftAidYes().click();
    };

    static clickOnCompleteMyDonationButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getCompleteMyDonationButton().click();
    };

    //TYPE
    static typeCreditCardHolderName(name: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getCreditCardHolderName().clear().type(name);
    };

    static typeCreditCardNumber(number: string): void {
        cy.typeOnIframe(CREDIT_CARD_NUMBER, CREDIT_CARD_NUMBER_FIELD, number);
    };

    static typeCreditCardExpiryDate(expiryDate: string): void {
        cy.typeOnIframe(CREDIT_CARD_EXPIRY_DATE, CREDIT_CARD_EXPIRY_DATE_FIELD, expiryDate);
    };

    static typeCreditCardSecurityCode(securityCode: string): void {
        cy.typeOnIframe(CREDIT_CARD_SECURITY_CODE, CREDIT_CARD_SECURITY_CODE_FIELD, securityCode);
    };

    //wait
    static waitCreditCardFieldsBeReady(): void {
        cy.intercept('POST', 'https://payments.sandbox.braintree-api.com/graphql').as('creditCardFieldsReady');
        cy.wait('@creditCardFieldsReady');
    };
    
}
export default PaymentPage;