export const HomePageLocators = {
  signUpLink: 'a[href*="login"]',
  deleteAccountLink: 'a[href*="delete_account"]',
  continueButton: 'continue-button',
  loggedInText: 'a:has(i.fa-user)',
} as const;
