#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const https = require('https')
const ncp = require('ncp').ncp
const cp = require('child_process')

ncp.limit = 16

const scripts = `"start": "serve public",
    "watch": "rollup -c -w",
    "build": "rollup -c",
    "dev": "npm-run-all --parallel start watch",
    "test": "jest",
    "lint": "eslint --fix --ext .jsx,.js src",
    "precommit": "lint-staged"`

const configs = `"license": "ISC",
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleDirectories": [
      "node_modules"
    ],
    "setupFiles": [
      "<rootDir>/src/__tests__/setupJest.js"
    ],
    "moduleNameMapper": {
      "\\\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
    },
    "testPathIgnorePatterns": [
      "fileTransformer.js",
      "setupJest.js"
    ],
    "transform": {
      "^.+\\\\.js$": "babel-jest",
      "^.+\\\\.jsx$": "babel-jest",
      "\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__tests__/__mocks__/fileTransformer.js"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "prettier --trailing-comma es5 --single-quote --write",
      "eslint --fix --ext .jsx,.js",
      "git add"
    ]
  }`

const getDeps = (deps = []) =>
  Object.entries(deps)
    .map(dep => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/^/g, '')
    // exclude the plugin only used in this file, nor relevant to the boilerplate
    .replace(/fs-extra[^\s]+/g, '')

console.log()
console.log('-------------------------------------------------------')
console.log('Starting installation')
console.log('-------------------------------------------------------')
console.log()

// create folder and initialize npm
try {
  cp.execSync(
    `mkdir ${process.argv[2]} && cd ${
      process.argv[2]
    } && npm init -f && git init`
  )

  const packageJSON = `${process.argv[2]}/package.json`

  // replace the default scripts, with the webpack scripts in package.json
  fs.readFile(packageJSON, (err, file) => {
    if (err) {
      throw err
    }
    const data = file
      .toString()
      .replace(
        '"test": "echo \\"Error: no test specified\\" && exit 1"',
        scripts
      )
      .replace('"license": "ISC"', configs)
    fs.writeFile(packageJSON, data, err2 => err2 || true)
  })

  const validFiles = [
    // "README.md",
    'rollup.config.js',
    '.babelrc',
    '.eslintignore',
    '.eslintrc',
    '.prettierrc',
  ]

  for (let i = 0; i < validFiles.length; i += 1) {
    fs.createReadStream(path.join(__dirname, `../${validFiles[i]}`)).pipe(
      fs.createWriteStream(`${process.argv[2]}/${validFiles[i]}`)
    )
  }

  const validFolders = ['src', 'public']

  for (let i = 0; i < validFolders.length; i += 1) {
    ncp(
      path.join(__dirname, `../${validFolders[i]}`),
      `${process.argv[2]}/${validFolders[i]}`,
      function(err) {
        if (err) {
          return console.error(err)
        }
      }
    )
  }
} catch (err) {
  console.error(`oopsie doopsie: ${err}`)
}

console.log()
console.log('-------------------------------------------------------')
console.log('Initialisation done, starting installation\n')
console.log('Installing -- it might take a few minutes...')
console.log('-------------------------------------------------------')
console.log()

const packages = [
  'react-rollup-app',
  'babel-preset-react-rollup-app',
  'eslint-config-react-rollup-app',
  'postcss-preset-react-rollup-app',
]

let devDeps = []
let deps = []

for (let i = 0; i < packages.length; i += 1) {
  const packageJson = require(`../packages/${packages[i]}/package.json`)
  // installing dependencies
  devDeps.push(getDeps(packageJson.devDependencies))
  deps.push(getDeps(packageJson.dependencies))
}

cp.exec(
  `cd ${process.argv[2]} && npm i -D ${devDeps.join(' ')} && npm i ${deps.join(
    ' '
  )}`,
  err => {
    if (err) {
      console.log()
      console.log('-------------------------------------------------------')
      console.log('npm install error\n')
      console.log(err)
      console.log('-------------------------------------------------------')
    } else {
      console.log('Dependencies installed')
      console.log()
      console.log('-------------------------------------------------------')
      console.log('You are all set!\n')
      console.log('ʕノ•ᴥ•ʔノ ︵ ┻━┻')
      console.log('-------------------------------------------------------')
      console.log()
    }
  }
)
