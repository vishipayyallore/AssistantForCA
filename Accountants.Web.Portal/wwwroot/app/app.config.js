// app.config.js

"use strict";

(function() {
 
    angular.module("AssistantForCAApp")
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", initializeRouters]);

    function initializeRouters($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise("/");

        $stateProvider
                .state("clients", {
                        url: "/clients",
                        templateUrl: "/app/client/index.html",
                        controller: "clientController",
                        controllerAs: "vm"
                    }
                );

        
    }

})();