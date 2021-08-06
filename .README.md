# REFERENCE

- [https://www.youtube.com/watch?v=OIAzwr-_jhY&ab_channel=codedamn](https://www.youtube.com/watch?v=OIAzwr-_jhY&ab_channel=codedamn)

# GOAL

- To understand more about the cypress ecosystem.

# CHARACTERISTICS

- Agnostic end 2 end testing framework

# CYPRESS MOTIVATION

- to keep old features stables w/a breaking acting as a security layer

# COMPARISON

- `selenium` = acts as a new layer (compatability) from the browser and the app (headless)
- `cypress` = acts by sitting inside the browser (node process aka `task runner`)

# ADVANTAGES

- you have much more control of the pages

# DISAVANTAGES

- suffer by experience the native problems

# COMMANDS

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

# FOLDERS STRUCTURES

- `fixtures` = dummy data which you may want to use (API mock)
- `integratio` = where your spec / test files will be
- `plugins` = extending default functionalities
- `support`  = utils folder