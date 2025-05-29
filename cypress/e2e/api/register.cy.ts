import { getBaseApiUrl, getApiKey } from '../../utils/apiConfigUtils';
import { createAccountsData } from '../../data/api/register/createAccountsData';
import { updateAccountsData } from '../../data/api/register/updateAccountsData';

describe('Register API Tests', () => {
  const baseApiUrl = getBaseApiUrl();
  const apiKey = getApiKey();
  const idsArray: string[] = [];

  it('Verify user can register accounts via POST /api/users', () => {
    createAccountsData.forEach((createAccountData, index) => {
      const createUserPayload = {
        firstName: createAccountData.firstName,
        lastName: createAccountData.lastName,
        gender: createAccountData.gender,
        birthDay: createAccountData.birthDay,
      };

      const createUserEndpoint = `${baseApiUrl}/api/users`;

      cy.request({
        method: 'POST',
        url: createUserEndpoint,
        body: createUserPayload,
        headers: { 'x-api-key': apiKey },
      }).then(response => {
        expect(response.status).to.eq(201);

        const responseBody = response.body;
        expect(responseBody).to.have.property(
          'firstName',
          createUserPayload.firstName
        );
        expect(responseBody).to.have.property(
          'lastName',
          createUserPayload.lastName
        );
        expect(responseBody).to.have.property(
          'gender',
          createUserPayload.gender
        );
        expect(responseBody).to.have.property(
          'birthDay',
          createUserPayload.birthDay
        );
        expect(responseBody).to.have.property('id');
        idsArray.push(responseBody.id);
      });
    });
  });

  it('Verify user can update an account via PUT /api/users/{userId}', () => {
    const randomAccount =
      updateAccountsData[Math.floor(Math.random() * updateAccountsData.length)];

    const randomId = idsArray[Math.floor(Math.random() * idsArray.length)];

    const updateUserPayload = {
      firstName: randomAccount.firstName,
      lastName: randomAccount.lastName,
      gender: randomAccount.gender,
      birthDay: randomAccount.birthDay,
    };

    const updateUserEndpoint = `${baseApiUrl}/api/users/${randomId}`;

    cy.request({
      method: 'PUT',
      url: updateUserEndpoint,
      body: updateUserPayload,
      headers: { 'x-api-key': apiKey },
    }).then(response => {
      expect(response.status).to.eq(200);

      const responseBody = response.body;
      expect(responseBody).to.have.property(
        'firstName',
        updateUserPayload.firstName
      );
      expect(responseBody).to.have.property(
        'lastName',
        updateUserPayload.lastName
      );
      expect(responseBody).to.have.property('gender', updateUserPayload.gender);
      expect(responseBody).to.have.property(
        'birthDay',
        updateUserPayload.birthDay
      );
    });
  });

  it('Verify user can delete accounts via DELETE /api/users/{userId}', () => {
    const idsToDelete = idsArray.slice(0, 2);

    idsToDelete.forEach(id => {
      const deleteUserEndpoint = `${baseApiUrl}/api/users/${id}`;

      cy.request({
        method: 'DELETE',
        url: deleteUserEndpoint,
        headers: { 'x-api-key': apiKey },
      }).then(response => {
        expect(response.status).to.eq(204);
        const responseBody = response.body;
        expect(responseBody).to.be.oneOf(['', null, {}]);
      });
    });
  });

  it('Verify user can update an account via PUT /api/users/{userId} 1', () => {
    const randomAccount =
      updateAccountsData[Math.floor(Math.random() * updateAccountsData.length)];

    const updateUserPayload = {
      firstName: randomAccount.firstName,
      lastName: randomAccount.lastName,
      gender: randomAccount.gender,
      birthDay: randomAccount.birthDay,
    };

    const updateUserEndpoint = `${baseApiUrl}/api/users/999999`;

    cy.request({
      method: 'PUT',
      url: updateUserEndpoint,
      body: updateUserPayload,
      headers: { 'x-api-key': apiKey },
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
