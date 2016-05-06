var angular = require('angular');

var uiRouter = require('angular-ui-router');

module.exports = angular.module('app.router', [
        uiRouter
    ])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/party/list");
    })

    .name;
