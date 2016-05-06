var angular = require('angular');

var controller = require('./party.controller');
var router = require('./party.router');

module.exports = angular.module('app.party', [
    controller,
    router
]).name;
