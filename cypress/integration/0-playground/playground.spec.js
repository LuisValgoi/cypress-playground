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

  it.only("Click on create a free account and assert '/register' page was loaded with the necessary fields", () => {
    cy.visit("https://codedamn.com");
    cy.viewport(1920, 1080);

    cy.contains("Create a free account").click();
    cy.url().should("include", "/register");

    cy.contains("Sign up with Facebook").should("exist");
    cy.contains("Sign up with Google").should("exist");
    cy.get("input[id=name]").should("exist");
    cy.get("input[id=username]").should("exist");
    cy.get("input[id=email]").should("exist");
    cy.get("input[id=password]").should("exist");
    cy.get("input[id=password]").should("exist");
    cy.get("button[type=submit]").should("exist");
  });
});
