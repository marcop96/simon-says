/// <reference types="cypress" />

describe("website", () => {
  it("succesfully loads", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("[data-cy=play-text]").should("contain.text", "press Play to start");
    cy.get("[data-cy=play-button]").should("be.visible");
    cy.get("[data-cy=round-text]").should("not.be.visible");
    cy.get("[data-cy=turn-text]").should("not.be.visible");
    cy.get("[data-cy=squares-container]").should("be.visible");
    cy.get("[data-cy=blue-square]").should("be.visible");
    cy.get("[data-cy=red-square]").should("be.visible");
    cy.get("[data-cy=green-square]").should("be.visible");
    cy.get("[data-cy=yellow-square]").should("be.visible");
  });
});
