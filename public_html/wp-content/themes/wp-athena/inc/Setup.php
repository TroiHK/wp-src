<?php
/**
 * Enqueue scripts and styles.
**/
function athena_scripts() {
    // Styles
    wp_enqueue_style( 'main-style', ASSETS_PATH.'css/main.css', array(), null );

    // Scripts
    wp_enqueue_script( 'main-script', ASSETS_PATH.'js/main.js', array('jquery'), null, true );

    wp_localize_script( 'main-script', 'wp_localize',
        array(
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'homeurl' => get_home_url()
        )
    );
    wp_enqueue_script( 'main-script' );

}
add_action( 'wp_enqueue_scripts', 'athena_scripts' );

/**
 * Register Menu
**/
add_action('init', 'athena_setup');
function athena_setup(){
    register_nav_menus( array(
        'athena_main_menu' => __('Main Menu', DOMAIN)
    ) );
    add_theme_support( 'post-thumbnails' );
    add_post_type_support( 'page', 'excerpt' );
    // add_image_size(FULL_SLIDE,1366,555,TRUE);
}

/**
 * ACF Functions
**/
//Create option page
if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title' 	=> __('General Settings', DOMAIN),
        'menu_title'	=> __('Theme options', DOMAIN),
        'menu_slug' 	=> 'athena-theme-settings',
        'capability'	=> 'manage_options',
        'redirect'		=> false
    ));

    acf_add_options_sub_page(array(
        'page_title'    => __('Blocks', DOMAIN),
        'menu_title'    => __('Blocks', DOMAIN),
        'parent_slug'   => 'athena-theme-settings',
    ));

}

/**
 * Change the Login Logo
 */
function athena_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?= get_field(ATHENA_LOGO, 'option'); ?>);
            height:85px;
            width:100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            padding-bottom: 30px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'athena_login_logo' );

function athena_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'athena_login_logo_url' );

function athena_login_logo_url_title() {
    return get_bloginfo( 'name' );
}
add_filter( 'login_headertitle', 'athena_login_logo_url_title' );
