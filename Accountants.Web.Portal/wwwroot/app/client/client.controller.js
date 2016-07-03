// client.controller.js

"use strict";

(function() {
    angular.module("AssistantForCAApp")
        .controller("ClientController", ClientController);

    function ClientController() {
        var vm = this;

        activate();

        function activate() {
            alert("Hi Man from Client Controller!");
        }
        
    }

})();
