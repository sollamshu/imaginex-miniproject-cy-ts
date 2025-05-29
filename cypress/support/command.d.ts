/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataTest(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}
