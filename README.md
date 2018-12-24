# react-native-template-echobind

Our Recommended template for React Native projects.

## Includes

Libraries:

- React Native 0.57
- TypeScript
- react-navigation
- Storybook 4
- Detox for E2E tests
- Emotion Native for styling

Dev Productivity:

- Hygen templates to easily generate components, screens, and utils with tests and stories
- reactotron
- vscode settings for common overrides
- default scripts for icon generation
- global styles
- react-nativation preconfigured with a few common setups

CI / Deployment:

- CircleCI preconfigured for fast build times
- Fastlane lanes for alpha, beta, and production releases. These should be run on CI!
- AppCenter integration for easy alpha distribution

## Setup

1. Initialize a new react-native app: `react-native init MyApp --template=https://github.com/echobind/react-native-template-echobind`
2. Install Ruby and a version manager (like RVM or rbenv) if you don't already have them on your machine:

   Ruby: `$ brew install ruby`

   For RVM: `\curl -sSL https://get.rvm.io | bash`

   For rbenv: `brew install rbenv` ... and then setup your shell: `rbenv init`.

   Close your terminal and open a new one.

3. Install GraphicsMagick `brew install graphicsmagick`.
4. Run `bundle install`.
5. Run the setup script: `node ./setup`. A successful setup will give you the green light: `✅ Setup completed!`.

---

## Configuration

[Customize Generator Templates](./docs/hygen-templates.md)
