(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('EmployeeTabsController', ['$scope', '$state', EmployeeTabsController]);

    function EmployeeTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Employee';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('employeeList');
                    break;
                case 1:
                    $state.transitionTo('employeeCreate');
                    break;
            }
        });
    }

})();
