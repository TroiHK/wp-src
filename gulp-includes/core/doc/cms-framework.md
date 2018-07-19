# CMS/Framework Integration

## Best practices

Sources should **NOT** be accessible from public URL. The Frontend Boilerplate should contain your application within a */whatever-www/* directory. The default folder is : */public/*. Everything you need is in */gulp-includes/gulp-configuration.js*.

**You should add your .gitignore rules in */gulp-includes/.gitignore*.** Gulp will automatically take this file as a source, add the path of generated assets and output an optimised .gitignore file in your project's root directory. In some rare cases, you may need to disable this feature. Everything you need is in */gulp-includes/gulp-configuration.js*.

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