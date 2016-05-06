var angular = require('angular');
var angularMaterial = require('angular-material');
var angularLocalStorage = require('angular-local-storage');

var uiRouter = require('angular-ui-router');

module.exports = angular.module('app.controler', [
        angularMaterial,
        angularLocalStorage,
        uiRouter
    ])

    .controller('PartyListController', function ($scope, $state, ethereumAuth, localStorageService) {

        $scope.list ;

        $scope.click = function(){
            ethereumAuth.create().then(function(contract){
                console.log('TEST');
                $scope.contract = contract;
            });
        }

        $scope.parties = [
            'Test',
            'Test2'
        ]

    })

    .name;
