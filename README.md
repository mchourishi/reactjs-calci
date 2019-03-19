# ReacJS Basic Calculator

This is a simple react calculator app 

## Instructions

First clone this repository.
```bash
$ https://github.com/mchourishi/reactjs-calci.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install # or yarn
```

Run it
```bash
$ npm start # or yarn start
```
Run Tests
```bash
$ npm test # or yarn test


## Steps

1. npm start will load the Calculator App in your browser.
2. Simply try to perform operations.

<img src="https://github.com/mchourishi/reactjs-calci/blob/master/public/images/calculator-screenshot.png" />

## Analysis/Decisions

A basic calculator normally has a display screen, a keypad and different keys and they are different components of a calculator
The code is also have been divided into 4 different components
1. DisplayPanel.js - The display bar on the top
2. ButtonPanel.js - The Keypad panel
3. Button.js - Different buttons on a keypad.
4. App.js - The main component which renders the above 3 components.

I took the css from https://codepen.io/mjijackson/pen/xOzyGX and have modified it.
