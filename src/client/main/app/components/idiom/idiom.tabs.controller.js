(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('IdiomTabsController', ['$scope', '$state', IdiomTabsController]);

    function IdiomTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Idiom';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('idiomList');
                    break;
                case 1:
                    $state.transitionTo('idiomCreate');
                    break;
            }
        });
    }

})();
