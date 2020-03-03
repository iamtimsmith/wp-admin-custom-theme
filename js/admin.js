jQuery(document).ready(function($) {
  var menuItem = "<li class='wp-has-submenu menu-top menu-icon-post open-if-no-js menu-top-more'>";
  menuItem += "<a href='javascript:void(0)' class='wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first'>";
  menuItem += "<div class='wp-menu-image dashicons-before dashicons-menu'></div>";
  menuItem += "<div class='wp-menu-name'>More</div>";
  menuItem += "</a>";
  menuItem += "<ul class='wp-submenu wp-submenu-wrap'></ul>";
  menuItem += "</li>";
  $('#adminmenu').append(menuItem);

  var items = $('#adminmenu li:nth-child(n+12):not(.menu-top-more)');
  var moreItems = $('#adminmenu .menu-top-more ul.wp-submenu');
  console.log(items);
  $.each(items, function(i, l) {
    moreItems.append(items[i]);
  });


});