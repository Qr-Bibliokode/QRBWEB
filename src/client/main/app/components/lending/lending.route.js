(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('lending', {
                url: '/lending',
                templateUrl: 'app/components/lending/lending.tabs.html'
            })
            .state('lendingLend', {
                parent: 'lending',
                views: {
                    "tabLending": {
                        templateUrl: 'app/components/lending/lend/lending.lend.html',
                        controller: 'LendingLendController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('lendingEdit', {
                parent: 'lending',
                views: {
                    "tabLending": {
                        templateUrl: 'app/components/lending/edit/lending.edit.html',
                        controller: 'LendingEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('lendingList', {
                parent: 'lending',
                views: {
                    "tabLending": {
                        templateUrl: 'app/components/lending/list/lending.list.html',
                        controller: 'LendingListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
