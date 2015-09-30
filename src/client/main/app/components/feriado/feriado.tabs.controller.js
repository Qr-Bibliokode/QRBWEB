(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('FeriadoTabsController', ['$scope', '$state', FeriadoTabsController]);

    function FeriadoTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Feriado';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('feriadoList');
                    break;
                case 1:
                    $state.transitionTo('feriadoCreate');
                    break;
            }
        });
    }

})();
