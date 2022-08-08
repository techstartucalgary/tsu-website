# Tech Start UCalgary Official Website

- [Tech Start UCalgary Official Website](#tech-start-ucalgary-official-website)
  - [Description](#description)
  - [Installation](#installation)
  - [How to Contribute](#how-to-contribute)
    - [Active Contributors (F22/W23)](#active-contributors-f22w23)
  - [Maintenance](#maintenance)
  - [How to Build, Test, and Run](#how-to-build-test-and-run)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

## Description

This is the official website for Tech Start UCalgary, a student driven club which focuses on software development, technology, and entrepreneurship at the University of Calgary.

This website is built with React & TypeScript.

Also check out our backend, created with Python and
Django! https://github.com/Tech-Start-UCalgary/tsu-website-back-end

## Installation

To get started with your local dev environment, you will need to install node.js.

To abide by our code structure and formatting guidelines, please install Prettier as a dependency and plugin. You can refer to this [issue](https://github.com/Tech-Start-UCalgary/tsu-website/issues/251) for further instructions.

Ensure you have installed all dependencies before running the app locally: `npm install`

## How to Contribute

Before making any feature changes, ensure that there has been an issue created and added to our [project board](https://github.com/orgs/Tech-Start-UCalgary/projects/1/views/4) to track the work.

To make a feature change:

1. Switch to our `dev` branch: `git checkout dev`
2. Pull our latest dev changes so that you are up to date with the branch: `git pull origin dev`
3. Create and switch to your own branch (which should be a descriptive name of your feature change): `git checkout -b FeatureChange`
4. Make your code changes
5. Add all your changed files: `git add --all`. Alternatively, you can add selected files as well.
6. Commit your changes: `git commit -m "Short and informative description of changes"`
7. Push your changes to your remote branch: `git push origin YourBranchName`
8. Create new pull request on GitHub. Make sure to change your target branch to `dev`, assign all active contributors as reviewers, assign yourself as the assignee, and include a brief description of your changes.
9. Once your PR has been created, go to your issue, click on "Linked pull requests", and select your PR to link to your issue. You can refer to this [PR](https://github.com/Tech-Start-UCalgary/tsu-website/pull/303) as an example.
10. Add all relevant reviewers to your PR; at minimum this should include the Presidents, VP Communications, and VP Development. You will be able to merge your PR once you receive at least 2 approvals from your reviewers.
11. After you have merged your PR, please delete your remote branch.
12. An admin will review and deploy your changes to the website by pushing your changes to the `main` branch.

### Active Contributors (F22/W23)

- Sahiti Akella
- Tyler Chan
- Niyousha Raeesinejad

## Maintenance

Please refer to our [Maintenance Guide](./maintenance-guide.md).

## How to Build, Test, and Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
