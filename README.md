# @1kinlabs/ui-core
The core library for all front-end repos. This library contains all components, colors, hooks, and any other shared logic required by front-end repos.

## Authenticating
* In order to use a project using this package, you will need to authenticate with Github's NPM Registry.
* [Follow these steps to set up authentication](https://1kin.atlassian.net/wiki/spaces/SD/pages/2686990/Github+NPM+Registry+Setup)
* You only need to do this once for all private packages.

## Building the Package
* All commits to `main` will trigger a package build
* The package.json version will be automatically incremented by a [github action workflow](https://github.com/phips28/gh-action-bump-version)
* Include `major:` in your commit message to increment the major version
* Include `feat:` or `feature:` in your commit message to increment the minor version
* Any other commit not containing the above keywords will increment the patch version

## Deploying
### Vercel
* Create a [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
* Create an environment variable in Vercel named `NPM_RC` with the following content:
    ```
    //npm.pkg.github.com/:_authToken=<personal-access-token>
    @1kinlabs:registry=https://npm.pkg.github.com/
    ```

### AWS
* TODO!
