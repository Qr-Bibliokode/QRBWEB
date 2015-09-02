(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('HolidayTabsController', ['$scope', '$state', HolidayTabsController]);

    function HolidayTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Holiday';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('holidayList');
                    break;
                case 1:
                    $state.transitionTo('holidayCreate');
                    break;
            }
        });
    }

})();
