var angular = require('angular');

var uiRouter = require('angular-ui-router');

module.exports = angular.module('app.party.router', [
        uiRouter
    ])

    .config(function($stateProvider) {

        $stateProvider
            .state('party', {
                url: "/party",
                abstract: true,
                template: '<ui-view/>'
            })
            .state('party.list', {
                url: '/list',
                controller: 'PartyListController',
                templateUrl: require('./party.list.html')
            });
    })

    .name;
