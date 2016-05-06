var ethereumAuth = require('ethereum-auth');

var angular = require('angular');

var Web3 = require('web3');

module.exports = angular.module('app.services', [])

    .service('ethereumAuth', function ($q) {

        var web3 = new Web3();
        var defaultProvider = new web3.providers.HttpProvider("/web3")

        web3.setProvider(defaultProvider);
        web3.eth.defaultAccount = web3.eth.coinbase;


        var passwordDelegateServices = ethereumAuth.services.passwordDelegateServices(web3);

        this.create = function(){
            return $q(function(resolve, reject) {
                console.log('Start ');
                passwordDelegateServices.create("Willem123", function(err, contract){
                    passwordDelegateContract = contract
                    console.log('Created');
                    resolve(contract);
                });
            });
        }
    })

    .name;
