# CRUK QA Engineer Technical Exercise

Your task is to write an automated test/s using Cypress for making a donation to Cancer Research UK (https://app.pws.int.cruk.org/support-us/your-donation).

## Scenario 
Make a card donation using test data attached (donor.json).

Verify that the correct donation reference is displayed on the thank you page.

The Donation reference can be found in the response of the transaction API call.

## How to run

Cypress GUI

```shell
    yarn cypress:open
```

Cypress Headless

```shell
    yarn cypress:run
```

## Test Development 

The exercise was developed with the most recent version of Cypress with TypeScript. The architecture is based on Page Object Model and the setup was created according with cypress guidelines. 