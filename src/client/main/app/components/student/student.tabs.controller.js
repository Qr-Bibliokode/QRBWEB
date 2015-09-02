(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('StudentTabsController', ['$scope', '$state', StudentTabsController]);

    function StudentTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Student';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('studentList');
                    break;
                case 1:
                    $state.transitionTo('studentCreate');
                    break;
            }
        });
    }

})();
