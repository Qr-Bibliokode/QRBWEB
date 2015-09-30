(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('LivroTabsController', ['$scope', '$state', LivroTabsController]);

    function LivroTabsController($scope, $state) {
        var vm = this;
        vm.titulo = 'Página Livro';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('livroList');
                    break;
                case 1:
                    $state.transitionTo('livroCreate');
                    break;
            }
        });
    }

})();
