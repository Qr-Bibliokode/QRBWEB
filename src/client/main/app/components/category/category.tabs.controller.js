(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('CategoryTabsController', ['$scope', '$state', CategoryTabsController]);

    function CategoryTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Category';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('categoryList');
                    break;
                case 1:
                    $state.transitionTo('categoryCreate');
                    break;
            }
        });
    }

})();
