import { getBaseUrl } from '../utils/webConfigUtils';
import { HomePageLocators } from '../locators/homePageLocators';

export class HomePage {
  navigate() {
    cy.visit(getBaseUrl());
  }

  clickSignUpLogin() {
    const { signUpLink } = HomePageLocators;

    cy.get(signUpLink).should('be.visible').click();
  }

  verifyUserIsLoggedIn(name: string) {
    const { loggedInText } = HomePageLocators;

    cy.get(loggedInText).should('contain.text', `Logged in as ${name}`);
  }

  deleteAccount() {
    const { deleteAccountLink, continueButton } = HomePageLocators;

    cy.get(deleteAccountLink).should('be.visible').click();
    cy.getByDataTest(continueButton).click();
  }

  clickProducts() {
    const { productsLink } = HomePageLocators;

    cy.get(productsLink).should('be.visible').first().click();

    cy.url().should('match', /products$/);
  }

  clickCart() {
    const { cartLink } = HomePageLocators;

    cy.get(cartLink).should('be.visible').first().click();

    cy.url().should('match', /view_cart$/);
  }

  async clickTestCases() {
    const { testCasesLink } = HomePageLocators;
    
    cy.get(testCasesLink).should('be.visible').first().click();

    cy.url().should('match', /test_cases$/);
  }

  async clickApiTesting() {
    const { apiTestingLink } = HomePageLocators;

    cy.get(apiTestingLink).should('be.visible').first().click();

    cy.url().should('match', /api_list$/);
  }

  async clickContactUs() {
    const { contactUsLink } = HomePageLocators;
    
    cy.get(contactUsLink).should('be.visible').first().click();

    cy.url().should('match', /contact_us$/);
  }
}
