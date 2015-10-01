(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('FuncionarioTabsController', ['$scope', '$state', FuncionarioTabsController]);

    function FuncionarioTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Funcionario';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('funcionarioList');
                    break;
                case 1:
                    $state.transitionTo('funcionarioCreate');
                    break;
            }
        });
    }

})();
