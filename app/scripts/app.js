'use strict';

/**
 * @ngdoc overview
 * @name craveAngularApp
 * @description
 * # craveAngularApp
 *
 * Main module of the application.
 */
angular
  .module('craveAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl'
      })
      .when('/purchase', {
        templateUrl: 'views/purchase.html',
        controller: 'PurchaseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
