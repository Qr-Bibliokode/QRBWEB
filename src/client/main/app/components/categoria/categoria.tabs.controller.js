(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('CategoriaTabsController', ['$scope', '$state', CategoriaTabsController]);

    function CategoriaTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Categoria';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('categoriaList');
                    break;
                case 1:
                    $state.transitionTo('categoriaCreate');
                    break;
            }
        });
    }

})();
