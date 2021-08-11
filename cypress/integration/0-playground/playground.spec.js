/// <reference types="cypress" />

describe("Playground - Desktop Suite Case", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://codedamn.com");
  });

  it("Checks if the Website contains the heading title", () => {
    cy.contains("Be industry-ready fullstack coder. 10x faster and 100x cheaper.");
  });

  it("Assert if the Website has correct heading title", () => {
    cy.contains("Be industry-ready fullstack coder. 10x faster and 100x cheaper.").should("exist");
  });

  it("Assert if the Website has a heading level 1 as main-title", () => {
    cy.get("h1[data-testid=main-title]").should("exist");
  });

  it("Assert if the Website heading level contains the correct text", () => {
    cy.get("h1[data-testid=main-title]").should("contain.text", "Be industry-ready");
  });

  it("Assert if the Website doesn't have a heading level 2 as main-title", () => {
    cy.get("h2[data-testid=main-title]").should("not.exist");
  });

  it("Click on create a free account and assert '/register' page was loaded with the necessary fields", () => {
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

  it("When clicked on search opens search modal", () => {
    cy.get("input[name=search]").click();

    cy.get("input[placeholder='Search anything...']").should("exist");
  });

  it("Search for React course in the home page throught the modal search", () => {
    cy.get("input[name=search]").click();

    cy.get("input[placeholder='Search anything...']").type("React");
  });

  it("Copy and paste submit form help values", () => {
    cy.contains("Contact Us").click();
    cy.get("input[name=first_name]").type("Luis{ctrl}+{c}");
    cy.get("input[name=email]").type("{ctrl}+{v}");
    cy.get("input[name=subject]").type("{ctrl}+{v}");
    cy.get("textarea[name=message]").type("{ctrl}+{v}");
  });
});

describe("Playground - Mobile Suite Case", () => {
  beforeEach(() => {
    cy.viewport("iphone-8");
    cy.visit("https://codedamn.com");
  });

  it("Asserts that the Website heading level in Iphone8 POV is filling whole space", () => {
    cy.get("a[data-testid='homepage-cta']").invoke("width").should("be.gt", 200);
  });
});

describe("Playground - Server Suite Case", () => {
  it("When triggered /users API, stub and mock the response with example.json fixture", () => {
    cy.intercept("https://localhost:8080/users", { fixture: "example.json" });
  });

  it("Triggers /settings API using aliases, intercepts and resolves with cy.wait", () => {
    cy.intercept({ url: "http://localhost:8080/settings*", query: { q: "terms" } }).as("settings");
    cy.wait("@settings").then((interception) => {
      console.log(interception.response.body.data);
    });
    cy.wait("@settings").its("request.url").should("include", "terms");
    cy.wait("@settings").its("response.statusCode").should("eq", 200);
    cy.wait("@settings").its("response.body").should("include", "id");
  });
});
