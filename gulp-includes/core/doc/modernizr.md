# Modernizr features detection

*/gulp-includes/gulp-configuration.js*

```js
/* Modernizr will be included in the bundle if feature-detects is filled. */
modernizr: {

    /* https://modernizr.com/download?video-videoloop */
    'feature-detects': [
        "test/video",
        "test/video/loop"
    ],

    /* Add classes in <html> tag ? */
    'add-classes-in-html-tag': true
}
```

*/gulp-includes/js/example.js*

```js
if (Modernizr.video.h264) {
    // Browser supports mp4 <video>
}
if (Modernizr.videoloop) {
    // Browser supports videoloop
}
```

*/gulp-includes/scss/example.scss*

```scss
html.video {
  .video {
    display: block;
  }
  img.fallback {
    display: none;
  }
}
html.no-video {
  .video {
    display: none;
  }
  img.fallback {
    display: block;
  }
}
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