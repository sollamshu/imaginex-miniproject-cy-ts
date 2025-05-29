import { getBaseUrl } from '../utils/webConfigUtils';
import { HomePageLocators } from '../locators/homePageLocators';

export class HomePage {
  navigate() {
    cy.visit(getBaseUrl());
  }

  clickSignUpLogin() {
    const { signUpLink } = HomePageLocators;

    cy.get(signUpLink).click();
  }

  verifyUserIsLoggedIn(name: string) {
    const { loggedInText } = HomePageLocators;

    cy.get(loggedInText).should('contain.text', `Logged in as ${name}`);
  }

  deleteAccount() {
    const { deleteAccountLink, continueButton } = HomePageLocators;

    cy.get(deleteAccountLink).click();
    cy.getByDataTest(continueButton).click();
  }
}
