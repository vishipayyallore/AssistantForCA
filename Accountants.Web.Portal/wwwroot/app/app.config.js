// app.config.js

"use strict";

(function() {
 
    angular.module("AssistantForCAApp")
        .config(initializeRouters);

    function initializeRouters($stateProvider, $locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
                .state("client", {
                        url: "/Client",
                        templateUrl: "/app/client/index.html",
                        controller: "ClientController",
                        controllerAs: "vm"
                    }
                );

        $locationProvider.html5Mode(false);
    }

})();