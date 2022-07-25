/// <reference types="cypress" />

describe("website", () => {
  it("succesfully loads", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
});

describe("checks that there-s a play button", () => {
  it("passes", () => {
    cy.get(".btn-start").click();
  });
});

describe("round counter", () => {
  it("round counter works");
});

// describe("plays wrong move", () => {
//   it("passes", () => {
//     cy.get(".btn-start").click();
//   });
// });
