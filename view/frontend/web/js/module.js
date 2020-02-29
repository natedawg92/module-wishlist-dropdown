define([
    'jquery',
    'mage/mage',
    'mage/ie-class-fixer',
    'domReady!'
], function($) {
    'use strict';

    $('.wishlist-wrapper')
        .clone()
        .appendTo('#store\\.links .header.links')
        .wrap('<li class="wishlist-wrapper-mobile" />')
        .contents()
        .unwrap();
});
