// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />


declare namespace Cypress {
    interface Chainable {
        /**
         * Type on iframe fields 
         * @param iframeComponent iframe component from the application 
         * @param iframeInput Input field from the iframe 
         * @param inputValue value to type in the iframe field 
         * @example cy.typeOnIframe('#braintree-hosted-field-number', '#credit-card-number', '4000000000001000');
         *
        */
        typeOnIframe(iframeComponent, iframeInput, inputValue)
        
        /**
         * Access any page with cookies already accepted  
         * @param url url to access according with url already setup in cypress.json file 
         * @example cy.accessPage('/');
         * 
        */
        accessPage()

    }
}