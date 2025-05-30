import { SignUpLoginPageLocators } from '../locators/signUpLoginPageLocators';

export class SignUpLoginPage {
  createNewUser(username: string, email: string) {
    const { nameInput, emailInput, signUpButton } = SignUpLoginPageLocators;

    const randomNum = Math.floor(Math.random() * 10000);
    const randomNumWithFourDigits = randomNum.toString().padStart(4, '0');
    const [localPart, domain] = email.split('@');
    const newEmail = `${localPart}${randomNumWithFourDigits}@${domain}`;

    cy.getByDataTest(nameInput).type(username);
    cy.getByDataTest(emailInput).type(newEmail);
    cy.getByDataTest(signUpButton).click();
  }

  fillAccountInformation(
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    city: string,
    zipCode: string,
    mobileNumber: string
  ) {
    const {
      passwordInput,
      firstNameInput,
      lastNameInput,
      addressInput,
      stateInput,
      cityInput,
      zipCodeInput,
      mobileNumberInput,
      createAccountButton,
      continueButton,
    } = SignUpLoginPageLocators;

    cy.getByDataTest(passwordInput).should('be.visible').type(password);
    cy.getByDataTest(firstNameInput).type(firstName);
    cy.getByDataTest(lastNameInput).type(lastName);
    cy.getByDataTest(addressInput).type(address);
    cy.getByDataTest(stateInput).type(state);
    cy.getByDataTest(cityInput).type(cityInput);
    cy.getByDataTest(zipCodeInput).type(zipCode);
    cy.getByDataTest(mobileNumberInput).type(mobileNumber);
    cy.getByDataTest(createAccountButton).click();
    cy.getByDataTest(continueButton).click();
  }
}
