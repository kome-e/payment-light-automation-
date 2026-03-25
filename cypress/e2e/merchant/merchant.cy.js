import Merchants from '../PageObjects/merchant';
import {BeforeAll,Before, When} from '@badeball/cypress-cucumber-preprocessor';

const merchant = new Merchants

BeforeAll(() => {
  cy.loginOnce();
});

Before(() => {
    cy.loginOnce()
    cy.intercept('GET', '**').as('pageLoad');
    cy.visit('/balance/collection-wallet'); 
    cy.wait('@pageLoad', { timeout: 10000 }).then(() => {
      cy.get('body', { timeout: 10000 }).should('be.visible');
  });
});

 When('user creates a customer', () =>{ 
 cy.wrap(null).then(() => {
 merchant.customercreation() 
  });
})


 When('user adds a user', () =>{ 
 cy.wrap(null).then(() => {
 merchant.usercreation() 
 });
})

 When('user validates payout page', () => {
  cy.wrap(null).then(() => { 
  merchant.payoutPage()
  });
 })