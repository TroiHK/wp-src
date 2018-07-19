# JSHint - How to bypass gulp check-js warnings

#### Disable and enable again

```js
/* jshint ignore:start */
var foo = eval(parameter);
/* jshint ignore:end */
```

#### Disable for a single line

```js
var foo = eval(parameter); // jshint ignore:line
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