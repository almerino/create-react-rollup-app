# React Rollup App

_This is still a beta, if something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new)._

Create React apps with no build configuration.

## Quick Overview

```sh
npx create-react-rollup-app my-app
cd my-app
npm start
```

Then open [http://localhost:5000/](http://localhost:5000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node >= 8 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-rollup-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-rollup-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-rollup-app my-app
```

_`yarn create` is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── index.html
└── src
    ├── __test__/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.js
    └── logo.svg
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://jestjs.io/docs/en/getting-started)

### `npm run build` or `yarn build`

Builds the app for production to the `public/` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified<br>

Your app is ready to be deployed.

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

- React, JSX, and ES6 support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

## License

Create React App is open source software [licensed as MIT](https://github.com/almerino/create-react-rollup-app/blob/master/LICENSE).
