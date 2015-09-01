(function () {
    'use strict';

    angular.module('qrbweb')
        .controller('CommentTabsController', ['$scope', '$state', CommentTabsController]);

    function CommentTabsController($scope, $state) {
        var vm = this;
        vm.title = 'Página Comments';

        $scope.$watch('selectedTab', function (current) {
            switch (current) {
                case 0:
                    $state.transitionTo('commentList');
                    break;
                case 1:
                    $state.transitionTo('commentCreate');
                    break;
            }
        });
    }

})();
