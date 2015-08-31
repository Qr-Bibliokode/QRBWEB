(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('StatusTabsController', ['$scope', '$state', StatusTabsController]);

    function StatusTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Status';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('statusList');
                    break;
                case 1:
                    $state.transitionTo('statusCreate');
                    break;
            }
        });
    }

})();
