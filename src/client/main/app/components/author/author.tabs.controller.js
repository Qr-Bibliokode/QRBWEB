(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('AuthorTabsController', ['$scope', '$state', AuthorTabsController]);

    function AuthorTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Autor';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('authorList');
                    break;
                case 1:
                    $state.transitionTo('authorCreate');
                    break;
            }
        });
    }

})();
