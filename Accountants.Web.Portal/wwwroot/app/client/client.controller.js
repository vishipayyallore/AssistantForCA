// client.controller.js

'use strict';

(function() {
    angular.module("AssistantForCAApp.client.controllers", [])
        .controller('ClientController', clientController);


    //clientController.$inject = ['$http'];

    function clientController() {
        var vm = this;

        alert('Hi Man from Client Controller!');
    }

})();
