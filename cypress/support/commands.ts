Cypress.Commands.add('getByDataTest', (selector: string) => {
  return cy.get(`[data-qa="${selector}"]`);
});
