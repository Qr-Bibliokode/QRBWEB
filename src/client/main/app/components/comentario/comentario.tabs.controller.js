(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('ComentarioTabsController', ['$scope', '$state', ComentarioTabsController]);

    function ComentarioTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Comentarios';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('comentarioList');
                    break;
                case 1:
                    $state.transitionTo('comentarioCreate');
                    break;
            }
        });
    }

})();
