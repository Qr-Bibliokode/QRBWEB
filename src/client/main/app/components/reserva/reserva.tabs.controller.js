(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('ReservaTabsController', ['$scope', '$state', ReservaTabsController]);

    function ReservaTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Reserva';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('reservaList');
                    break;
                case 1:
                    $state.transitionTo('reservaCreate');
                    break;
            }
        });
    }

})();
