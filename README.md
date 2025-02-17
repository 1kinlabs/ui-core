# @1kinlabs/ui-core
The core library for all front-end repos. This library contains all components, colors, hooks, and any other shared logic required by front-end repos.

## Authenticating
* In order to use a project using this package, you will need to authenticate with Github's NPM Registry.
* [Follow these steps to set up authentication](https://app.clickup.com/9011161457/v/dc/8chpubh-431/8chpubh-171)
* You only need to do this once for all private packages.

## Building the Package
* All commits to `main` will trigger a package build
* The package.json version will be automatically incremented by a [github action workflow](https://github.com/phips28/gh-action-bump-version)
* Include `major:` in your commit message to increment the major version
* Include `feat:` or `feature:` in your commit message to increment the minor version
* Any other commit not containing the above keywords will increment the patch version

## Development
### Building
You can do either of the following to build `ui-core`.
* Rebuild on file changes
    ```
    yarn start
    ```
    - This starts up tsc in watch mode, recompiling after every change
    - [File Watching Configuration docs](https://www.typescriptlang.org/docs/handbook/configuring-watch.html)
    - The package.json file is copied to the dist directory only once before build starts.
* Manually build
    ```
    yarn build
    ```
    - This will build once.
    - After building, the package.json will be copied into the dist directory.

### Git hooks
We use a pre-commit hook to run `eslint --fix` on all changed files.
To set it up, run
```
yarn git-hooks
```

### Storybook
To run storybook tests locally run `yarn storybook`

#### a. Linking Method
You may experience multiple copies of React issues using `yarn link`,
but it's the easiest way to use a local module.

These issues typically manifest by saying something along the lines of
> TypeError: Cannot read properties of null (reading 'useEffect')

If this happens to you, try the manual method instead.

* Build/start ui-core
  ```
  yarn start
  ```
* link dist directory
  ```
  cd dist && yarn link
  ```
* From the root directory of the project you'd like to test your changes in, run
    ```
    yarn link @1kinlabs/ui-core
    ```
* Now, any changes made in your local `ui-core` will appear in the linked project.
* To unlink run this in the linked project
    ```
    yarn unlink ../ui-core/dist
    ```
    or
    ```
    yarn unlink --all
    ```
    - Note: you'll want to run this after you're done testing changes, otherwise your directories will stay linked

#### b. Manual Method
* From `ui-core`, run
    ```
    yarn build
    cd dist
    ```
* (Optional?) You may need to increment the version number in `dist/package.json` to an unused version so Yarn doesn't installed an old cached version.
* Create the package
    ```
    yarn pack
    ```
* Note the filepath of the created tgz file
* From the consuming project's directory, run
    ```
    yarn add --force @1kinlabs/ui-core@../ui-core/dist/<name-of-file>.tgz
    ```

## FAQs
### WHY AREN'T MY CHANGES BEING REFLECTED IN THE INSTALLED PACKAGE?!?!?!? OMG?!?!!!1
I'm sorry you're going through this. Try this:
```
rm -rf node_modules && yarn cache clean && yarn
```
