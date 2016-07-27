
(function () {
    "use strict";

    angular.module("waitControl", [])
      .directive("waitCursor", waitCursor);

    function waitCursor() {
        return {
            scope: {
                show: "=displayWhen"
            },
            restrict: "E",
            templateUrl: "app/sharedviews/waitCursor.html"
        };
    }

})();