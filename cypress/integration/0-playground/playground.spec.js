/// <reference types="cypress" />

describe("Playground Suite Case", () => {
  it("The Website was successfully visited", () => {
    cy.visit("https://codedamn.com");
  });

  it("Checks if the Website contains the heading title", () => {
    cy.visit("https://codedamn.com");
    cy.contains("Be industry-ready fullstack coder. 10x faster and 100x cheaper.");
  });

  it("Assert if the Website has correct heading title", () => {
    cy.visit("https://codedamn.com");
    cy.contains("Be industry-ready fullstack coder. 10x faster and 100x cheaper.").should("exist");
  });

  it("Assert if the Website has a heading level 1 as main-title", () => {
    cy.visit("https://codedamn.com");
    cy.get("h1[data-testid=main-title]").should("exist");
  });

  it("Assert if the Website heading level contains the correct text", () => {
    cy.visit("https://codedamn.com");
    cy.get("h1[data-testid=main-title]").should("contain.text", "Be industry-ready");
  });

  it("Assert if the Website doesn't have a heading level 2 as main-title", () => {
    cy.visit("https://codedamn.com");
    cy.get("h2[data-testid=main-title]").should("not.exist");
  });

  it("Asserts that the Website heading level in Iphone8 POV is filling whole space", () => {
    cy.visit("https://codedamn.com");
    cy.viewport("iphone-8");
    cy.get("a[data-testid='homepage-cta']").invoke("width").should("be.gt", 200);
  });
});
