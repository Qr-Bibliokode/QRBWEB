(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('status', {
                url: '/status',
                templateUrl: 'app/components/status/status.tabs.html'
            })
            .state('statusCreate', {
                parent: 'status',
                views: {
                    "tabStatus": {
                        templateUrl: 'app/components/status/create/status.create.html',
                        controller: 'StatusCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('statusEdit', {
                parent: 'status',
                views: {
                    "tabStatus": {
                        templateUrl: 'app/components/status/edit/status.edit.html',
                        controller: 'StatusEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('statusList', {
                parent: 'status',
                views: {
                    "tabStatus": {
                        templateUrl: 'app/components/status/list/status.list.html',
                        controller: 'StatusListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
