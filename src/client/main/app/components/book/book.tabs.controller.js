(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('BookTabsController', ['$scope', '$state', BookTabsController]);

    function BookTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Book';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('bookList');
                    break;
                case 1:
                    $state.transitionTo('bookCreate');
                    break;
            }
        });
    }

})();
