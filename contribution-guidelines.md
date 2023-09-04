# Contribution Guidelines

- [Contribution Guidelines](#contribution-guidelines)
  - [👩‍⚖️ Admins](#️-admins)
  - [👩‍💻Active Contributors](#active-contributors)
  - [🌟Getting Started](#getting-started)
  - [🧪 How to Build, Test, and Run](#-how-to-build-test-and-run)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [💻 Guidelines for Code Contributions](#-guidelines-for-code-contributions)
  - [🎨 Guidelines for Non-Code Contributions](#-guidelines-for-non-code-contributions)
  - [📃Code of Conduct](#code-of-conduct)
  - [📩Contact Us](#contact-us)

Thank you for your interest in contributing to the Tech Start UCalgary website repository! We welcome any and all contributions to improve our website and make it a better resource for our community. Before making a contribution, please read and follow these guidelines to ensure that your changes are appropriate and contribute to our goals.

## 👩‍⚖️ Admins

| Name                 | GitHub Profile                              |
|----------------------|---------------------------------------------|
| Joel Happ            | [Jhappy77](https://github.com/Jhappy77)     |
| Niyousha Raeesinejad | [Niyousha99](https://github.com/Niyousha99) |
| Ben Schmidt          | [Anidion](https://github.com/Anidion)     |

## 👩‍💻Active Contributors

| Name                 | GitHub Profile                                  |
|----------------------|-------------------------------------------------|
| Niyousha Raeesinejad | [Niyousha99](https://github.com/Niyousha99)     |
| Isaiah Asaolu | [Isaiah](https://github.com/IsaiahA21)     |

There are several types of contributions that you can make to this repository:

- **Bug fixes:** If you notice a bug or issue with the website, submit an issue and fix that addresses the problem.
- **Content updates:** If you notice outdated or incorrect information on the website, please submit an update with the correct information. Please refer to our [Content Updates Guide](./content-updates.md) for details on how and when to update different types of content.
- **Design improvements:** If you have design suggestions or improvements to make the website more user-friendly or visually appealing, please submit your ideas and any relevant code changes.
- **New features:** If you have an idea for a new feature or functionality that would be useful to our community, please submit your proposal and any relevant code changes.

## 🌟Getting Started

To get started contributing to the Tech Start UCalgary website, please follow these steps:

1. Clone the repository to your local machine.
2. Switch to our `dev` branch: `git checkout dev`.
3. Pull our latest dev changes so that you are up to date with the branch: `git pull origin dev`.
4. Create and switch to your own branch (which should be a descriptive name of your feature change): `git checkout -b name-of-feature-change`.
5. Make your code changes.
6. Add all your changed files: `git add --all`. Alternatively, you can add selected files as well.
7. Sign off and commit your changes along with a short and informative description of changes : `git commit -s`.
8. Push your changes to your remote branch: `git push origin name-of-feature-change`.
9. Create new pull request on GitHub. Make sure to set your target branch to `dev`, assign yourself as the assignee, and include a brief description of your changes.
10. Once your PR has been created, go to your issue, click on "Linked pull requests", and select your PR to link to your issue. You can refer to this [past PR](https://github.com/Tech-Start-UCalgary/tsu-website/pull/303) as an example.
11. Add all relevant reviewers to your PR; at minimum this should include the Presidents, VP Communications,  VP Development, any any relevant active contributors. You will be able to merge your PR once you receive at least 2 approvals from your reviewers.
12. After you have merged your PR to `dev`, please delete your remote branch.
13. An admin will review and deploy your changes to the website by pushing your changes from `dev` to the `main` branch.

## 🧪 How to Build, Test, and Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Remember to run `npm install` first to install all dependencies needed to run the app in development.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

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

Instead, it will copy all the configuration files and the transitive dependencies (`webpack`, `Babel`, `ESLint`, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 💻 Guidelines for Code Contributions

When making code contributions to the Tech Start UCalgary website, please follow these guidelines:

- Write clear, concise code that is easy to understand and maintain.
- Use descriptive variable and function names.
- Test your code thoroughly before submitting it.
- Follow existing coding standards and conventions.
- Avoid making changes that are not related to your contribution.

## 🎨 Guidelines for Non-Code Contributions

If you are making non-code contributions to the Tech Start UCalgary website, such as design or content updates, please follow these guidelines:

- Provide clear and detailed descriptions of your changes.
- Include any relevant images or files.
- Follow existing design and content standards and conventions.
- Avoid making changes that are not related to your contribution.

## 📃Code of Conduct

Please note that all contributors are expected to adhere to the [Tech Start UCalgary Code of Conduct](CODE_OF_CONDUCT.md)

## 📩Contact Us

If you have any questions or concerns about contributing to the Tech Start UCalgary website repository, please contact us at info@techstartucalgary.com.

Thank you for your contributions to our community! 👐
