(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('UserAccountTabsController', ['$scope', '$state', UserAccountTabsController]);

    function UserAccountTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página UserAccount';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('userAccountList');
                    break;
                case 1:
                    $state.transitionTo('userAccountCreate');
                    break;
            }
        });
    }

})();
