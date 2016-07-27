"use strict";

(function () {

    angular.module("app")
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", initrouter]);

    function initrouter($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state(
                "home", {
                    url: "/",
                    templateUrl: "app/home/index.html",
                    controller: "HomeController",
                    controllerAs: "vm"
                }
            )
            .state(
                "client", {
                    url: "/Client",
                    templateUrl: "app/client/index.html",
                    controller: "ClientController",
                    controllerAs: "vm"
                }
            );
    }

})();