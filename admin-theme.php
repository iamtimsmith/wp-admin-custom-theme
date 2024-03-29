<?php

/**
 * Plugin Name: Admin Theme
 * Author: Tim Smith
 * Description: A plugin which customizes the WordPress admin area.
 */

// Update CSS within in Admin
function admin_style() {
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400&display=swap');
  wp_enqueue_style('admin-styles', plugins_url('css/admin.min.css', __FILE__), [], time());
  wp_enqueue_script('admin-scripts', plugins_url('js/admin.js', __FILE__), array('jquery'), '1.0.0', true);
}
add_action('admin_init', 'admin_style');

function frontend_style() {
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400&display=swap');
  wp_enqueue_style('frontend-styles', plugins_url('css/frontend.min.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'frontend_style');

// Set order of starting items
function change_menu_order( $menu_order ) {
  return array(
      'index.php',
      'edit.php?post_type=page',
      'edit.php',
  );
}
add_filter( 'custom_menu_order', '__return_true' );
add_filter( 'menu_order', 'change_menu_order' );