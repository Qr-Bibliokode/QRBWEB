(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('IdiomaTabsController', ['$scope', '$state', IdiomaTabsController]);

    function IdiomaTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Idioma';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('idiomaList');
                    break;
                case 1:
                    $state.transitionTo('idiomaCreate');
                    break;
            }
        });
    }

})();
