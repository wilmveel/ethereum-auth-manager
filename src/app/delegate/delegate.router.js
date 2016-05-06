var angular = require('angular');

var uiRouter = require('angular-ui-router');

module.exports = angular.module('app.delegate.router', [
        uiRouter
    ])

    .config(function($stateProvider) {

        $stateProvider
            .state('delegate', {
                url: "/delegate",
                abstract: true,
                template: '<ui-view/>'
            })
            .state('delegate.list', {
                url: '/list',
                controller: 'PartyListController',
                templateUrl: require('./delegate.list.html')
            });
    })

    .name;
