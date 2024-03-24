# React App render Stock Graph and tabluar data

## How to install

### Using Git (recommended)

1.  Clone the project from github.

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
npm install
npm update
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`


### Running the linting (lifting API server)

```bash
npm run lint:fix
npm run format:check
npm run format:write
```
###  How do you modularize a large React app? What is the difference between Angular and React?
Usually large react app divided in the following structure 

```bash
src/
├── components/
├── pages/
├── services/
├── utils/
├── styles/
├── assets/
├── constants/
└── ...
```
and also apply the DRY rule make it more resuable component. Also use a component-based architecture with a clear folder structure, distinguish between presentational and container components, centralize state management, divide services and utilities, use modular styling, apply code splitting, handle routing, make sure thorough testing is done, document code, and perform regular reviews and refactoring for scalability and maintainability are some ways to modularize a large React application.

## Difference between Angular and React

Angular is a full-fledged MVC framework with TypeScript support, while React is a JavaScript library for building user interfaces, offering a simpler component-based approach.
Major difference between Angular and react is react is SPA and UI libraray while Angular is a framework build on MVC. Angular offers both one-way and two-way data binding mechanisms, React primarily uses one-way data binding with the concept of props and state, and controlled components for handling user input
