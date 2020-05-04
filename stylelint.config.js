module.exports = {
  extends: [
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // Override rules that would interfere with Prettier
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-prettier',
  ],
  plugins: [
    // Bring in some extra rules for SCSS
    'stylelint-scss',
  ],
  rules: {
    // we want to have empty script tags in project at least in development for adding styles
    'no-empty-source': null,
    // Allow SCSS and CSS module keywords beginning with `@`
    'at-rule-no-unknown': [null],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'responsive', 'media', 'screen'],
      },
    ],
  },
}
