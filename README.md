# CRUK QA Engineer Technical Exercise

Your task is to write an automated test/s using Cypress for making a donation to Cancer Research UK (https://app.pws.int.cruk.org/support-us/your-donation).

## Scenario 
Make a card donation using test data attached (donor.json).

Verify that the correct donation reference is displayed on the thank you page.

The Donation reference can be found in the response of the transaction API call.

## How to run the test

You need to have git already installed.

1. Clone repository

```shell
  git clone https://github.com/anarachelaraujo/cruk-qa-engineer-test.git
```

2. Install npm

```shell
    npm install -g npm
```

3. Download dependencies 

```shell
    npm install 
```

5. Install yarn

```shell
  npm install --global yarn
```

6. Run the command below to open Cypress GUI

```shell
    yarn cypress:open
```

7. Run the command below to execute Cypress in headless mode

```shell
    yarn cypress:run
```

## Test Development 

The exercise was develop with the most recent version of Cypress with TypeScript. The architecture is based on Page Object Model. 