var angular = require('angular');
var angularMaterial = require('angular-material');

var uiRouter = require('angular-ui-router');

module.exports = angular.module('app.controler', [
        angularMaterial,
        uiRouter
    ])

    .controller('AppController', function ($scope, $state) {

        $scope.test = 'test123'

    })

    .name;
