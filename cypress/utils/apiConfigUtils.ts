//import * as dotenv from 'dotenv';

//dotenv.config();

export function getBaseApiUrl(): string {
  const url = Cypress.env('baseApiUrl');
  if (!url) {
    throw new Error('The baseApiUrl is not defined as env varible');
  }
  return url;
}

export function getApiKey(): string {
  const url = Cypress.env('apiKey');
  if (!url) {
    throw new Error('The apiKey is not defined as env varible');
  }
  return url;
}
