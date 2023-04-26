<?php
/**
 * Plugin Name: Snow Effect
 * Description: Adds a falling snow effect to all pages.
 * Version: 1.2
 * Author: Reese St Amant
 * Author URI: https://bettameta.com
 */


 defined( 'ABSPATH' ) OR exit;

 add_action( 'wp_enqueue_scripts', 'wpse_snow_effect_enqueue_scripts' );
 add_action( 'wp_head', 'wpse_snow_effect' );
 
 function wpse_snow_effect_enqueue_scripts() {
     wp_enqueue_script( 'snow', plugin_dir_url( __FILE__ ) . 'snow.js', array( 'jquery' ), '1.0', true );
 }
 
 function wpse_snow_effect() {
 ?>
 <script>
 jQuery(document).ready(function($) {
   // Create the snow effect
   var snow = new Snow( {
     flakeCount: 100,
     minSize: 10,
     maxSize: 20,
     flakeColor: '#ffffff',
     flakeSpeed: 2,
     flakeOpacity: 0.7,
     flakeType: 'circle',
     // Add randomness to the snowflakes' movement
     movement: {
         speed: {
             x: 1,
             y: 1
         },
         direction: {
             x: -1,
             y: -1
         }
     }
   } );
 
   // Add the snow effect to the document body
   snow.addTo( document.body );
 });
 </script>
 <?php
 }