# Plugin: Responsive image

Generates an \<img\> element whose src attribute changes according to the current value of : `gulp_display.breakpoint`.

This can be useful to load a smaller image file on mobile. 

### Installation

Set the enable option to `true` in */gulp-includes/gulp-configuration.js* :

```js
 /*
###################################
###### PLUGINS CONFIGURATION ######
###################################
*/

plugins: {
    responsiveImage: {
        enable: false
    }
}
```

### Usage

Use and adapt in any of your Twig files.

```twig
{% set options = {
    'src': img_url ~ 'default.png',
    'alt': 'This is mandatory',
    'class': 'this is optional',
    'id': 'this-is-optional',
    'title': 'This is optional',
    'src_2560': img_url ~ 'optional-2560.png',
    'src_1920': img_url ~ 'optional-1920.png',
    'src_1440': img_url ~ 'optional-1440.png',
    'src_1366': img_url ~ 'optional-1366.png',
    'src_1280': img_url ~ 'optional-1280.png',
    'src_1024': img_url ~ 'optional-1024.png',
    'src_768': img_url ~ 'optional-768.png',
    'src_480': img_url ~ 'optional-480.png',
    'src_320': img_url ~ 'optional-320.png'
} %}
{{ responsiveImage(options) }}
```

### CMS/Framework implementation

You need to set `$img_url`'s value first.

```php
<?php
    function responsiveImage($options)
    {
        $return = '<noscript class="gulp-responsiveimage" ';
        $return .= ' data-src="' . $options['src'] . '" ';
        $return .= ' data-alt="' . $options['alt'] . '" ';
        if ($options['class']) {
            $return .= ' data-class="' . $options['class'] . '" ';
        }
        if ($options['id']) {
            $return .= ' data-id="' . $options['id'] . '" ';
        }
        if ($options['title']) {
            $return .= ' data-title="' . $options['title'] . '" ';
        }
        $return .= ' data-src-2560="' . $options['src_2560'] . '" ';
        $return .= ' data-src-1920="' . $options['src_1920'] . '" ';
        $return .= ' data-src-1440="' . $options['src_1440'] . '" ';
        $return .= ' data-src-1366="' . $options['src_1366'] . '" ';
        $return .= ' data-src-1280="' . $options['src_1280'] . '" ';
        $return .= ' data-src-1024="' . $options['src_1024'] . '" ';
        $return .= ' data-src-768="' . $options['src_768'] . '" ';
        $return .= ' data-src-480="' . $options['src_480'] . '" ';
        $return .= ' data-src-320="' . $options['src_320'] . '" ';
        $return .= '><img src="' . $options['src'] . '" alt="' . $options['alt'] . '" ';
        if ($options['class']) {
            $return .= ' class="' . $options['class'] . '" ';
        }
        if ($options['id']) {
            $return .= ' id="' . $options['id'] . '" ';
        }
        if ($options['title']) {
            $return .= ' title="' . $options['title'] . '" ';
        }
        $return .= '/></noscript>';
        return $return;
    }
    
    $options = array(
        'src' => $img_url . 'default.png',
        'alt' => 'This is mandatory',
        'class' => 'this is optional',
        'id' => 'this-is-optional',
        'title' => 'This is optional',
        'src_2560' => $img_url . 'optional-2560.png',
        'src_1920' => $img_url . 'optional-1920.png',
        'src_1440' => $img_url . 'optional-1440.png',
        'src_1366' => $img_url . 'optional-1366.png',
        'src_1280' => $img_url . 'optional-1280.png',
        'src_1024' => $img_url . 'optional-1024.png',
        'src_768' => $img_url . 'optional-768.png',
        'src_480' => $img_url . 'optional-480.png',
        'src_320' => $img_url . 'optional-320.png'
    );
    
    echo responsiveImage($options);
?>


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