<?php

/**
 * Plugin Name: Admin Theme
 * Author: Tim Smith
 * Description: A plugin which customizes the WordPress admin area.
 */

// Update CSS within in Admin
function admin_style() {
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');
  wp_enqueue_style('admin-styles', plugins_url('css/admin.css', __FILE__));
}
add_action('admin_init', 'admin_style');

function frontend_style() {
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');
  wp_enqueue_style('frontend-styles', plugins_url('css/frontend.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'frontend_style');