describe("checks that website works", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
});

describe("checks that there-s a play button", () => {
  it("passes", () => {
    cy.get(".btn-start").click();
  });
});

describe("plays wrong move", () => {
  it("passes", () => {
    cy.get(".btn-start").click();
  });
});
