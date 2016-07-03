// client.controller.js

"use strict";

(function() {
    angular.module("AssistantForCAApp.controllers", [])
        .controller("ClientController", ClientController);


    //clientController.$inject = ['$http'];

    function ClientController() {
        var vm = this;

        activate();

        function activate() {
            alert("Hi Man from Client Controller!");
        }
        
    }

})();
