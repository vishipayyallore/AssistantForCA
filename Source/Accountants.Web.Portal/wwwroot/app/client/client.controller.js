(function () {
    "use strict";

    angular
        .module("app.client")
        .controller("ClientController", ["$http", "$location", "$stateParams", ClientController]);


    function ClientController($http, $location, $stateParams) {
        var vm = this;
        //Variables.
        vm.clientId = $stateParams.clientId;
        //alert(vm.clientId);
        vm.isBusy = true;
        vm.searchOn = "";
        vm.errorMessage = "";
        vm.newClient = {};
        vm.clientDetails = {};
        vm.clients = [];
        vm.lastFilingYears = [
                                { id: "2000-01", desc: "2000-01" }, { id: "2001-02", desc: "2001-02" },
                                { id: "2002-03", desc: "2002-03" }, { id: "2003-04", desc: "2003-04" },
                                { id: "2004-05", desc: "2004-05" }, { id: "2005-06", desc: "2005-06" },
                                { id: "2006-07", desc: "2006-07" }, { id: "2007-08", desc: "2007-08" },
                                { id: "2008-09", desc: "2008-09" }, { id: "2009-10", desc: "2009-10" },
                                { id: "2010-11", desc: "2010-11" }, { id: "2011-12", desc: "2011-12" },
                                { id: "2012-13", desc: "2012-13" }, { id: "2013-14", desc: "2013-14" },
                                { id: "2014-15", desc: "2014-15" }, { id: "2015-16", desc: "2015-16" },
                                { id: "2016-17", desc: "2016-17" }, { id: "2019-18", desc: "2019-18" },
                                { id: "2018-19", desc: "2018-19" }, { id: "2019-20", desc: "2019-20" }
                            ];
        vm.currentYearStatus = [
                                { id: "No_Response", desc: "No Response" },
                                { id: "Informed_Not_Turned_Up", desc: "Informed / Not turned up" },
                                { id: "DetailsReceived", desc: "Details Received" },
                                { id: "WorkInProgress", desc: "Work In Progress" },
                                { id: "Finalization", desc: "Finalization" },
                                { id: "Tax_Payment_Signature", desc: "Tax Payment, Signature" },
                                { id: "eFilling", desc: "eFilling" },
                                { id: "Filled_Fees_Pending", desc: "Filled, Fees Pending" },
                                { id: "Fees_Received_Completed", desc: "Fees Received - Completed" }
                            ];
        vm.clientTypes = [
                            { id: "Individual", desc: "Individual" },
                            { id: "HUF", desc: "HUF" },
                            { id: "LLP", desc: "LLP" },
                            { id: "Firm", desc: "Firm" },
                            { id: "Company", desc: "Company" },
                            { id: "Partnership", desc: "Partnership" },
                            { id: "Trust Societies", desc: "Trust/Societies" }
                        ];

        vm.resourceNames = [
                                { id: "Ajay", desc: "Ajay" },
                                { id: "Farzeen", desc: "Farzeen" },
                                { id: "Swaroop", desc: "Swaroop" },
                                { id: "PSM", desc: "PSM" },
                                { id: "Swapna", desc: "Swapna" }
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

        vm.getClient = function (clientId) {
            vm.isBusy = true;
            //vm.clientId = $routeParams.clientId;
            //alert(clientId);
            $location.path("/ViewClient");

            var _url = url + "/" + clientId;

            $http.get(_url)
            .then(function (response) {
                // Success
                angular.copy(response.data, vm.clientDetails);
                alert(vm.clientDetails.fullName);
                $location.path("/ViewClient/" + clientId);
            }, function (error) {
                // Failure
                vm.errorMessage = "Failed to load data: " + error;
            })
            .finally(function () {
                vm.isBusy = false;
            });

        }
        activate();

        function activate() { }
        
    }

})();