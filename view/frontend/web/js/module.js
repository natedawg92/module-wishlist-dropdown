define([
    'jquery',
    'domReady!'
], function($) {
    'use strict';

    $('.wishlist-wrapper').clone().appendTo('#store\\.links').toggleClass('wishlist-wrapper wishlist-wrapper-mobile header links');
});
``