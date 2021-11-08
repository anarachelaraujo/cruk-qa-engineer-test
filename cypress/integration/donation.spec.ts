import DetailsPage from "../page-objects/support-us/details-page";
import DonationPage from "../page-objects/support-us/donation-page";
import PaymentPage from "../page-objects/support-us/payment-page";
import ThankYouPage from "../page-objects/support-us/thank-you-page";
import donor from "../fixtures/donor.json"


describe('Make a successfully donation ', () => {
    before(() => {
        cy.accessPage('/');
    });

    it('should make a successfully donation ', () => {
        //fill donation form
        DonationPage.clickOnAmount10();
        DonationPage.clickOnDonationFromMyOwnMoney();
        DonationPage.selectMotivationOption(donor.motivation);
        DonationPage.clickOnRadioSpecificCancerDestination();
        DonationPage.selectSpecificCancerDestination(donor.cancerType);
        DonationPage.clickOnContinueButton();

        //fill details form
        DetailsPage.typeFirstName(donor.firstName);
        DetailsPage.typeLastName(donor.lastName);
        DetailsPage.typeEmailAddress(donor.email);
        DetailsPage.typePhoneNumber(donor.phone);
        DetailsPage.typePostCode(donor.homeAddress.postcode);
        DetailsPage.clickOnFindAddressButton();
        DetailsPage.selectAddress(`${donor.homeAddress.address1}, ${donor.homeAddress.town}, ${donor.homeAddress.postcode}`);
        DetailsPage.clickOnContinueButton();

        //fill payment form
        PaymentPage.waitCreditCardFieldsBeReady();
        PaymentPage.clickOnCreditCardOption();
        PaymentPage.typeCreditCardHolderName(`${donor.firstName} ${donor.lastName}`);
        PaymentPage.typeCreditCardNumber(donor.cardNumber);
        PaymentPage.typeCreditCardExpiryDate(donor.cardExpiry);
        PaymentPage.typeCreditCardSecurityCode(donor.cvv);
        PaymentPage.clickOnGiftAidYes();
        PaymentPage.clickOnCompleteMyDonationButton();

        //assert donation is successfully
        ThankYouPage.assertReferenceNumber();
        ThankYouPage.assertThankYouMessage(donor.firstName, donor.amount);
    });

});
