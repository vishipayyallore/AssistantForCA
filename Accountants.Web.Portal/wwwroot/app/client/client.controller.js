(function () {
    "use strict";

    angular
        .module("app")
        .controller("ClientController", ClientController);


    function ClientController() {
        var vm = this;

        vm.clients = [{
            id: 1,
            name: "Shiva Sai",
            activeSince: "01-Jun-2013",
            clientType: "Company",
            currentStatus: "Pending Fees"
        }, {
            id: 2,
            name: "Azim",
            activeSince: "01-Jun-2013",
            clientType: "Partner Ship",
            currentStatus: "Pending"
        }, {
            id: 3,
            name: "Mathew",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending"
        }, {
            id: 4,
            name: "Ajay",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending Visit"
        }, {
            id: 5,
            name: "Farzeen",
            activeSince: "01-Jun-2013",
            clientType: "Individual",
            currentStatus: "Pending Submission"
        }];

        activate();

        function activate() { }
    }

})();