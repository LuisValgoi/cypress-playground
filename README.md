### REFERENCE

- [https://www.youtube.com/watch?v=OIAzwr-_jhY&ab_channel=codedamn](https://www.youtube.com/watch?v=OIAzwr-_jhY&ab_channel=codedamn)

### MOTIVATION

- to keep old features stables w/a breaking acting as a security layer

### COMPARISON

- `selenium` = acts as a new layer (compatability) from the browser and the app (headless)
- `cypress` = acts by sitting inside the browser (node process aka `task runner`)

### ADVANTAGES

- you have much more control of the pages

### DISAVANTAGES

- suffer by experience the native problems

### COMMANDS

- `npm i cypress` = Installing

- `npx cypress open`= Opening Cypress Local Runner

- `npx cypress run --headless` = Opening Cypress Headless

### NOTES

- Agnostic end 2 end testing framework
- if you are using variable declaration, you are using cypress wrong
- test commands are executed in a deterministic manner.
- this results in a flake-free testing.
- subjects are passsed through the chain.

### FOLDERS STRUCTURES

- `fixtures` = dummy data which you may want to use (API mock)
- `integratio` = where your spec / test files will be
- `plugins` = extending default functionalities
- `support`  = utils folder

### HELPERs

There are several [commands to be used](https://docs.cypress.io/api/commands/and)

- `cy.visit` = Visit the given url.
- `cy.contains` = Get the DOM element containing the text (works partially as well).
- `cy.get` = Get one or more DOM elements by node name: input, button, etc.
- `cy.log` = Print a message to the Cypress Command Log.
- `cy.then` = Enables you to work with the subject yielded from the previous command.
- `...rightClick()` = Right-click a DOM element.
- `cy.viewport` = sets the view port of the page when launched by runner.
- `cy.intercept` = [mock/spy/stub HTTP requests.](https://docs.cypress.io/api/commands/intercept#Syntax)

### ASSERT

Normally, after `GIVEN` and `WHEN` , comes the `THEN`

So, in order to assert, exists these [commands here](https://docs.cypress.io/guides/references/assertions)

- `.should(....)` = Asserts if target is not strictly `(===)` equal to either `null` or `undefined`

![image](https://user-images.githubusercontent.com/8363610/128611644-904e63c2-816c-4cd9-89d0-8ca4e0ef9735.png)