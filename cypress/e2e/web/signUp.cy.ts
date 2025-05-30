import { HomePage } from '../../pages/homePage';
import { SignUpLoginPage } from '../../pages/signUpLoginPage';
import { accountInformationData } from '../../data/web/signUp/accountInformationData';

describe('Sign Up and Login Page Tests', () => {
  const homePage = new HomePage();
  const signUpLoginPage = new SignUpLoginPage();

  beforeEach(() => {
    homePage.navigate();
  });

  it('Verify user is able to create account, login and navigate the site', () => {
    const {
      name,
      email,
      password,
      firstName,
      lastName,
      address,
      state,
      city,
      zipcode,
      mobileNumber,
    } = accountInformationData;

    homePage.navigate();
    homePage.clickSignUpLogin();
    signUpLoginPage.createNewUser(name, email);
    signUpLoginPage.fillAccountInformation(
      password,
      firstName,
      lastName,
      address,
      state,
      city,
      zipcode,
      mobileNumber
    );
    homePage.verifyUserIsLoggedIn(name);
    homePage.clickProducts();
    homePage.clickCart();
    homePage.clickTestCases();
    homePage.clickApiTesting();
    homePage.clickContactUs();
    homePage.deleteAccount();
  });
});
