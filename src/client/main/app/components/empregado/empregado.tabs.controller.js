(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('EmpregadoTabsController', ['$scope', '$state', EmpregadoTabsController]);

    function EmpregadoTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Empregado';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('empregadoList');
                    break;
                case 1:
                    $state.transitionTo('empregadoCreate');
                    break;
            }
        });
    }

})();
