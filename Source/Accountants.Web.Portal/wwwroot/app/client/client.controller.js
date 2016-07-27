(function () {
    "use strict";

    angular
        .module("app.client")
        .controller("ClientController", ["$http", "$location", ClientController]);


    function ClientController($http, $location) {
        var vm = this;
        //Variables.
        vm.isBusy = true;
        vm.searchOn = "";
        vm.errorMessage = "";
        vm.newClient = {};
        vm.clients = [];
        vm.lastFilingYears = [
                                { id: "2000-01", desc: "2000-01" },
                                { id: "2000-01", desc: "2000-01" }
                             ];
        var url = "/api/clients";

        $http.get(url)
            .then(function (response) {
                // Success
                angular.copy(response.data, vm.clients);
            }, function (error) {
                // Failure
                vm.errorMessage = "Failed to load data: " + error;
            })
            .finally(function () {
                 vm.isBusy = false;
            });

        vm.addNewClient = function () {
            vm.isBusy = true;

            $http.post(url, vm.newClient)
                .then(function(response) {
                    // success
                    vm.newClient = {};
                    alert("Client Information Saved");
                    $location.path("/Client");
                }, function(err) {
                    // failure
                    vm.errorMessage = "Failed to add new Client";
                    alert(vm.errorMessage + " : " + err.message);
                })
                .finally(function() {
                    vm.isBusy = false;
                });
        }

        activate();

        function activate() { }

        
    }

})();