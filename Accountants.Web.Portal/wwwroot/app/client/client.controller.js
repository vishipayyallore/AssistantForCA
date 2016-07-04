// client.controller.js

"use strict";

(function() {
    angular.module("app")
        .controller("clientController", clientController);

    function clientController() {
        var vm = this;

        vm.isBusy = true;
        //$scope.userUpn = "Swamy";
        activate();

        function activate() {
            alert("Client Controller!");
        }
        
    }

})();
