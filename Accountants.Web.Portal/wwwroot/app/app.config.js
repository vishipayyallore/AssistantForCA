// app.config.js

"use strict";

(function() {
 
    angular.module("AssistantForCAApp")
        .config(initializeRouters);

    function initializeRouters($stateProvider, $locationProvider, $urlRouterProvider) {
        //alert("Hi Man!");
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
                .state("clients", {
                        url: "/clients",
                        templateUrl: "app/client/index.html",
                        controller: "ClientController",
                        controllerAs: "vm"
                    }
                );
    }
    //function initializeRouters($stateProvider, $locationProvider, $urlRouterProvider) {
        
    //    $locationProvider.html5Mode(true);
    //    $urlRouterProvider.otherwise("/client");
    //    alert("Hi Man!");
    //    $stateProvider
    //        .state("client", {
    //                url: "/client",
    //                templateUrl: "app/client/index.html",
    //                controller: "ClientControllerss",
    //                controllerAs: "vm"
    //            }
    //        );
    //}

})();