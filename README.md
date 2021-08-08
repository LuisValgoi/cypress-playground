### REFERENCE

- [https://www.youtube.com/watch?v=OIAzwr-_jhY&ab_channel=codedamn](https://www.youtube.com/watch?v=OIAzwr-_jhY&ab_channel=codedamn)

### NOTES

- Agnostic end 2 end testing framework

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

- Installing

```bash
npm i cypress
```

- Opening Cypress Local Runner

```bash
npx cypress open
```

- Opening Cypress Headless

```bash
npx cypress run --headless
```

### FOLDERS STRUCTURES

- `fixtures` = dummy data which you may want to use (API mock)
- `integratio` = where your spec / test files will be
- `plugins` = extending default functionalities
- `support`  = utils folder

### RULE OF THUMB

- if you are using variable declaration, you are using cypress wrong
- all the assertion/actions/etc are happening asynchronously

### HELPER COMMANDS

There are several [commands to be used](https://docs.cypress.io/api/commands/and)

- `cy.visit` = Visit the given url
- `cy.contains` = Get the DOM element containing the text (works partially as well)
- `cy.get` = Get one or more DOM elements by node name: input, button, etc.
- `cy.log` = Print a message to the Cypress Command Log.
- `cy.then` = Enables you to work with the subject yielded from the previous command.
- `...rightClick()` = Right-click a DOM element.

### VIEWPORT

- `cy.viewport` = sets the view port of the page when launched by runner

### ASSERT

Normally, after `GIVEN` and `WHEN` , comes the `THEN`

So, in order to assert, exists these [commands here](https://docs.cypress.io/guides/references/assertions)

- `.should(....)` = Asserts if target is not strictly `(===)` equal to either `null` or `undefined`

![image](https://user-images.githubusercontent.com/8363610/128611644-904e63c2-816c-4cd9-89d0-8ca4e0ef9735.png)
