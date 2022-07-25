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
let asd = [];

describe("gameplay", () => {
  it("plays wrong move", () => {
    cy.get("[data-cy=play-button]").click();
    cy.get("[data-cy=play-button]").should("not.be.visible");
    cy.get("[data-cy=round-text]").should("be.visible");
    cy.get("[data-cy=round-text]").contains("Round");
    cy.get("[data-cy=turn-text]").should("be.visible");
    cy.get("[data-cy=squares-container]")
      .find(".bg-white")
      .then((square) => {
        asd.push(square[0]);
      });
    cy.get(asd).wait(500).click();
    cy.get("[data-cy=blue-square]").wait(500).click();
    cy.get("[data-cy=blue-square]").wait(500).click();
    cy.get("[data-cy=blue-square]").wait(500).click();

    cy.get('[data-cy="play-text"]').should("be.visible");
    cy.get("[data-cy=play-button]").should("be.visible");
    cy.get('[data-cy="round-text"]').contains("You reached round ");
    cy.get("[data-cy=play-text]").should("contain.text", "You lost");
  });
});
