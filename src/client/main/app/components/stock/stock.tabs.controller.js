(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('StockTabsController', ['$scope', '$state', StockTabsController]);

    function StockTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Stock';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('stockList');
                    break;
                case 1:
                    $state.transitionTo('stockCreate');
                    break;
            }
        });
    }

})();
