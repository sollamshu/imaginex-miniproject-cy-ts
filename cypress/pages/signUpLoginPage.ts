import { SignUpLoginPageLocators } from '../locators/signUpLoginPageLocators';

export class SignUpLoginPage {
  createNewUser(username: string, email: string) {
    const { nameInput, emailInput, signUpButton } = SignUpLoginPageLocators;

    cy.getByDataTest(nameInput).type(username);
    cy.getByDataTest(emailInput).type(email);
    cy.getByDataTest(signUpButton).click();
  }

  fillAccountInformation(
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    country: string,
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
      countryDropdown,
      countryOption,
      stateInput,
      cityInput,
      zipCodeInput,
      mobileNumberInput,
      createAccountButton,
      continueButton,
    } = SignUpLoginPageLocators;

    cy.getByDataTest(passwordInput).type(password);
    cy.getByDataTest(firstNameInput).type(firstName);
    cy.getByDataTest(lastNameInput).type(lastName);
    cy.getByDataTest(addressInput).type(address);
    //cy.getByDataTest(countryDropdown).click();
    //cy.getByDataTest(countryOption(country)).click();
    cy.getByDataTest(stateInput).type(state);
    cy.getByDataTest(cityInput).type(cityInput);
    cy.getByDataTest(zipCodeInput).type(zipCode);
    cy.getByDataTest(mobileNumberInput).type(mobileNumber);
    cy.getByDataTest(createAccountButton).click();
    cy.getByDataTest(continueButton).click();
  }
}
