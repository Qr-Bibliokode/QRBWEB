(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('EmprestimoTabsController', ['$scope', '$state', EmprestimoTabsController]);

    function EmprestimoTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Emprestimo';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('emprestimoList');
                    break;
                case 1:
                    $state.transitionTo('emprestimoLend');
                    break;
            }
        });
    }

})();
