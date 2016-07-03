// client.controller.js

'use strict';

(function() {
    angular.module("AssistantForCAApp.client.controllers", [])
        .controller('ClientController', clientController);


    clientController.$inject = ['$http'];

    function clientController($http) {
        var vm = this;

        alert('Hi Man!');
    }

})();
