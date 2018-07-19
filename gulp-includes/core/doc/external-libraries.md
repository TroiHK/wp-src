# Use external libraries with [Yarn](https://yarnpkg.com/lang/en/docs/cli/add/)

## Installing

Using [Yarn's registered packages](https://yarnpkg.com/) :

`yarn add slick-carousel` (Add --no-bin-links if on VirtualBox.)

You can get more informations [here](https://yarnpkg.com/lang/en/docs/cli/add/).

## Uninstalling

`yarn remove slick-carousel` (Add --no-bin-links if on VirtualBox.)

## Including files

Include your JavaScript files in */gulp-includes/gulp-configuration.js*, order of inclusion will be respected.
Here's an example :

```js
config.generateJs_src = [
    'node_modules/slick-carousel/slick/slick.js'
];
```

Use the Sass import directive to include scss/css files. Path must be relative to the *.scss* file.

```scss
@import '../../node_modules/slick-carousel/slick/slick.scss'; //slick.scss
@import '../../node_modules/magnific-popup/dist/magnific-popup'; //magnific-popup.css
```

# Summary

- [Getting Started](./readme.md)
- [Available Gulp commands](./gulp-commands.md)
- [Use external libraries with Yarn](./external-libraries.md)
- [SCSS lint - How to bypass gulp check-scss warnings](./scss-lint.md)
- [JSHint - How to bypass gulp check-js warnings](./jshint.md)
- [Modernizr features detection](./modernizr.md)
- [Built-in JavaScript viewport informations (gulp_display)](./viewport-framework.md)
- [Responsive image Plugin](./responsive-image-plugin.md)
- [CMS/Framework Integration](./cms-framework.md)