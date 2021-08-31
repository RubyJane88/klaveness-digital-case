// @ts-check
///<reference path="../global.d.ts" />
/// <reference types="cypress"/>
import "@cypress/code-coverage/support";
import "@percy/cypress";
import "@bahmutov/cy-api/support";
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("getCommand", (url: string, responseBody: Array<any>) => {
  cy.intercept("GET", url, {
    statusCode: 200,
    body: responseBody,
  });
});

Cypress.Commands.add("NavigateByTestIdCommand", (testId: string) => {
  cy.visit("/");
  cy.get(`[data-testid=${testId}]`).click();
});
