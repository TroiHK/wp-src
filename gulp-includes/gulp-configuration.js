/*
 * @file
 *
 * - gulp [--dev] [--nojquery]
 * - gulp watch [--dev] [--reload] [--nojquery]
 *
 * - gulp css  [--dev]
 * - gulp favicon
 * - gulp html
 * - gulp check-js
 * - gulp check-scss
 * - gulp javascript [--dev] [--nojquery]
 * - gulp imagemin
 * - gulp gitignore
 * - gulp clean
 * - gulp wordpressify
 *
 */

const config = {

    /*
    ###########################################
    ########## PROJECT CONFIGURATION ##########
    ###########################################
    */

    /* This is important for favicon generation */
    project_name: "Project's name",

    /* This is important for favicon generation */
    /* Simply fill in your app's default language code. Please respect the syntax. */
    /* Language codes list : https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx */
    project_lang: 'en-US',

    /* Root folder of your application, CMS, framework... */
    project_root_directory: '/',

    /*
    ###########################################
    ######### JAVASCRIPT CONFIGURATION ########
    ###########################################
    */

    generateJs: {
        /* Enable or disable Javascript compilation */
        enable: true,

        /* Compiled JS file name */
        output_name: 'main',

        /* Compiled JS file destination */
        output_path: '/public_html/wp-content/themes/wp-athena/assets/js/',

        /* Path to external libs (e.g. sliders, modals ...). Most likely node_modules stuffs */
        src: [
            // 'node_modules/slick-carousel/slick/slick.js',
            // '/node_modules/magnific-popup/dist/jquery.magnific-popup.js'
        ],

        /* Modernizr will be included in the bundle if feature-detects is filled. */
        modernizr: {

            /* https://modernizr.com/download?video-videoloop */
            'feature-detects': [
                // "test/video",
                // "test/video/loop"
            ],

            /* Add classes in <html> tag ? */
            'add-classes-in-html-tag': false
        }
    },

    /*
    ###########################################
    ######### SASS / CSS CONFIGURATION ########
    ###########################################
    */

    generateCss: {
        /* Enable or disable Css compilation */
        enable: true,

        /* Compiled CSS file destination */
        output_path: '/public_html/wp-content/themes/wp-athena/assets/css/'
    },

    /*
    ###########################################
    ############ HTML CONFIGURATION ###########
    ###########################################
    */

    generateHtml: {
        /* Enable or disable Html compilation */
        enable: true,

        /* Compiled HTML files destination */
        output: '/public_html/'
    },

    /*
    ###########################################
    ######### Gitignore CONFIGURATION #########
    ###########################################
    */

    generateGitignore: {
        /* Enable or disable .gitignore compilation */
        enable: true
    },

    /*
    ###########################################
    ########### IMAGE CONFIGURATION ###########
    ###########################################
    */

    generateImages: {
        /* Images folder for gulp imagemin task */
        folder: '/public_html/wp-content/themes/wp-athena/assets/images/'
    },

    /*
    ###########################################
    ########## FAVICON CONFIGURATION ##########
    ###########################################
    */

    generateFavicon: {
        /* Compiled favicon destination */
        output: '/public_html/wp-content/themes/wp-athena/assets/images/favicon/',

        /* Favicon source */
        src: '/public_html/wp-content/themes/wp-athena/assets/images/favicon.png',

        /* Main color used for iOS/Android's UI  */
        main_color: '#ffffff'
    },

    /*
    ###########################################
    ########## PLUGINS CONFIGURATION ##########
    ###########################################
    */

    plugins: {
        responsiveImage: {
            enable: false
        }
    }
};

module.exports = config;