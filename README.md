# Project 12 - Build an analytics dashboard with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

- [The minimum supported Node.js version is `16.14.0` (LTS)](https://nodejs.org/en/)
- [Npm minimum version `8.3.1`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Installation

In the project root directory run `npm install`

## Available Scripts

In the root project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

The Web App calls the api on port 3000 (http://localhost:3000).
Ensure the api is running by following this link: [run backend api](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard#22-launching-the-project).

### `npm run mockedApi`

Runs the app in the development mode using the react app environment `mockedApi`.
Open [http://localhost:8082](http://localhost:8082) to view it in your browser.

the mocked api is running on port 3001 http://localhost:3001

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm doc`

Generate jsdoc documentation at directory `/docs`.

Open file `index.html` to see the full documentation of the Web App.

### Test Web app

Once app is lauched you are being redirected to the dashboards 
the userId change depending on your environment
if you run app with `npm run mockedApi` the id will be `12`
if you run app with `npm run start` the id will be `18`
