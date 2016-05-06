var angular = require('angular');

var controller = require('./delegate.controller');
var router = require('./delegate.router');

module.exports = angular.module('app.delegate', [
    controller,
    router
]).name;
