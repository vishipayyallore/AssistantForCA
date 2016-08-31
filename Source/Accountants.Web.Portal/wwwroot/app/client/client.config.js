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
            )
            .state(
                "viewclient", {
                    url: "/ViewClient/:clientId",
                    templateUrl: "app/client/view.html",
                    controller: "ClientController",
                    controllerAs: "vm"
                }
            );
        //.state(
        //    "editclient", {
        //        url: "/EditClient/:clientId",
        //        templateUrl: "app/client/edit.html",
        //        controller: "ClientController",
        //        controllerAs: "vm"
        //    }
        //);
    }

})();