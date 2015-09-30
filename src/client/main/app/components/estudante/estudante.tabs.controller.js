(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('EstudanteTabsController', ['$scope', '$state', EstudanteTabsController]);

    function EstudanteTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Estudante';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('estudanteList');
                    break;
                case 1:
                    $state.transitionTo('estudanteCreate');
                    break;
            }
        });
    }

})();
