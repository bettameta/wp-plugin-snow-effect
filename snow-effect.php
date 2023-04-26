<?php
/**
 * Plugin Name: Snow Effect
 * Description: Adds a falling snow effect to all pages.
 * Version: 1.0
 * Author: Reese St Amant
 * Author URI: https://bettameta.com
 */

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function snow_effect_enqueue_scripts() {
    wp_enqueue_script( 'snow-script', plugin_dir_url( __FILE__ ) . 'snow.js', array( 'jquery' ), '1.0', true );
    wp_enqueue_style( 'snow-style', plugin_dir_url( __FILE__ ) . 'snow.css', array(), '1.0' );
}
add_action( 'wp_enqueue_scripts', 'snow_effect_enqueue_scripts' );
