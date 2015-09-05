(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('userAccount', {
                url: '/userAccount',
                templateUrl: 'app/components/userAccount/userAccount.html',
                controller: 'UserAccountController',
                controllerAs: 'vm'
            })
            .state('userAccountCreate', {
                parent: 'userAccount',
                views: {
                    "tabUserAccount": {
                        templateUrl: 'app/components/userAccount/create/userAccount.create.html',
                        controller: 'UserAccountCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('userAccountEdit', {
                parent: 'userAccount',
                views: {
                    "tabUserAccount": {
                        templateUrl: 'app/components/userAccount/edit/userAccount.edit.html',
                        controller: 'UserAccountEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('userAccountList', {
                parent: 'userAccount',
                views: {
                    "tabUserAccount": {
                        templateUrl: 'app/components/userAccount/list/userAccount.list.html',
                        controller: 'UserAccountListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
