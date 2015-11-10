(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('EstoqueTabsController', ['$scope', '$state', EstoqueTabsController]);

    function EstoqueTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Estoque';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('estoqueList');
                    break;
                case 1:
                    $state.transitionTo('estoqueCreate');
                    break;
            }
        });
    }

})();
