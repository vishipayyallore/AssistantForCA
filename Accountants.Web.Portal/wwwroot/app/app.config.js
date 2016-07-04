(function() {
    'use strict';

    angular.module('app')
    .config(initrouter);

    function initrouter($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state(
                'home', {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            )
            .state(
                'client', {
                    url: '/client',
                    templateUrl: 'app/client/index.html',
                    controller: 'ClientController',
                    controllerAs: 'vm'
                }
            );
    }
})();