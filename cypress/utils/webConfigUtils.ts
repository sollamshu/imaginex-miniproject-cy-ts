export function getBaseUrl(): string {
  const url = Cypress.config('baseUrl');
  if (!url) {
    throw new Error('The baseUrl is not defined as env variable');
  }
  return url;
}
