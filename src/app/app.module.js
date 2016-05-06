var angular = require('angular');

var appController = require('./app.controller');
var appRouter = require('./app.router');
var appServices = require('./app.services');

var partyModule = require('./party/party.module');
var delegateModule = require('./delegate/delegate.module');

module.exports = angular.module('app', [
    appController,
    appRouter,
    appServices,

    partyModule,
    delegateModule

]).name;
