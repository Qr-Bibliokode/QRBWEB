(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('AutorTabsController', ['$scope', '$state', AutorTabsController]);

    function AutorTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Autor';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('autorList');
                    break;
                case 1:
                    $state.transitionTo('autorCreate');
                    break;
            }
        });
    }

})();
