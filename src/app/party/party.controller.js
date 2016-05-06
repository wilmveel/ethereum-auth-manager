var angular = require('angular');
var angularMaterial = require('angular-material');

var uiRouter = require('angular-ui-router');

module.exports = angular.module('app.controler', [
        angularMaterial,
        uiRouter
    ])

    .controller('PartyListController', function ($scope, $state, ethereumAuth) {

        $scope.contract;

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
