[![Netlify Status](https://api.netlify.com/api/v1/badges/713b12d4-e52c-487a-8cc5-07faa0e0af18/deploy-status)](https://app.netlify.com/sites/homely-design/deploys)
[![CircleCI](https://circleci.com/gh/Homely/homely-design-system.svg?style=svg)](https://circleci.com/gh/Homely/homely-design-system)

## Available Scripts

In the project directory, you can run:

### `yarn run storybook`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Build & Release

## Build

### `yarn run build`

## Generate changelog

### `yarn auto changelog`

### `git commit -m "Changelog for v0.1.0 [skip ci]"`

## Publish to npm

### `npm version 0.1.0 -m "Bump version to: %s [skip ci]"

### `npm publish`

## Create a release on GitHub:

### `git push --follow-tags origin master`

### `yarn auto release`
