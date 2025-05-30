export const HomePageLocators = {
  signUpLink: 'a[href*="login"]',
  deleteAccountLink: 'a[href*="delete_account"]',
  continueButton: 'continue-button',
  loggedInText: 'a:has(i.fa-user)',
  productsLink: 'a[href="/products"]',
  cartLink: 'a[href="/view_cart"]',
  testCasesLink: 'a[href="/test_cases"]',
  apiTestingLink: 'a[href="/api_list"]',
  contactUsLink: 'a[href="/contact_us"]',
} as const;
