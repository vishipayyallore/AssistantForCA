"use strict";

(function () {

    angular.module("app.client")
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", initrouter]);

    function initrouter($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/Client");
        $stateProvider
            .state(
                "addclient", {
                    url: "/AddClient",
                    templateUrl: "app/client/add.html",
                    controller: "ClientController",
                    controllerAs: "vm"
                }
            );
    }

})();