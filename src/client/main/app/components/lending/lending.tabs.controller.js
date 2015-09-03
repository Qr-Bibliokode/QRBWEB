(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('LendingTabsController', ['$scope', '$state', LendingTabsController]);

    function LendingTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Lending';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('lendingList');
                    break;
                case 1:
                    $state.transitionTo('lendingCreate');
                    break;
            }
        });
    }

})();
