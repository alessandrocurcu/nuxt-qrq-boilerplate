# nuxt-qrq-boilerplate

> My great Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Expose local host to external devices
* Get your IP in the terminal with `ipconfig getifaddr en1`
* In `paclage.json` update dev script with `HOST=<your ip> nuxt`

# Buefy
## Customization
* `css` in the costructor option in `nuxt.config.js` must be `false` otherwise you will inject Bulma styles twice in every page
```js
modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: false, materialDesignIcons: false }],
  ],
```
* Create a file in `assets` like `scss/main.scss`
* In that file write the following (Look at Buefy's doc for more information)
```js
@import "~bulma/sass/utilities/_all";

// Example change primary color
$primary: salmon;
$primary-invert: blue;
$colors: (

    "primary": ($primary, $primary-invert),

);

@import "~bulma";
@import "~buefy/src/scss/buefy";
```
