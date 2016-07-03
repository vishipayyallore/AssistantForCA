// app.config.js

"use strict";

(function() {
 
    angular.module("AssistantForCAApp")
        .config(["$routeProvider", initializeRouters]);

    //initializeRouters.$inject = ["$stateProvider"];

    function initializeRouters($routeProvider) {
        alert('Hi Man!');
        //$locationProvider.html5Mode(true);
        //$urlProvider.otherwise('/client');

        //$stateProvider
        //    .state('client', {
        //            url: '/client',
        //            templateUrl: 'app/client/index.html',
        //            controller: 'ClientController',
        //            controllerAs: 'vm'
        //        }
        //    );
    }

})();