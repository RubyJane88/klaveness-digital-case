/// <reference types="cypress"/>

import { CONTRACTS } from "../../../src/mocks/handlers/contractHandler";

describe("Contracts Page", () => {
  beforeEach(() => {
    /* Custom commands. Please see support/commands.ts
     * and the global.d.ts for intellisense */
    cy.getCommand("/contracts", CONTRACTS);
    cy.NavigateByTestIdCommand("nav-contracts");
  });

  it("should render contracts", () => {
    cy.get("[data-testid=card]").should("have.length", CONTRACTS.length);
  });
});
