(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('category', {
                url: '/category',
                templateUrl: 'app/components/category/category.tabs.html'
            })
            .state('categoryCreate', {
                parent: 'category',
                views: {
                    "tabCategory": {
                        templateUrl: 'app/components/category/create/category.create.html',
                        controller: 'CategoryCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('categoryEdit', {
                parent: 'category',
                views: {
                    "tabCategory": {
                        templateUrl: 'app/components/category/edit/category.edit.html',
                        controller: 'CategoryEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('categoryList', {
                parent: 'category',
                views: {
                    "tabCategory": {
                        templateUrl: 'app/components/category/list/category.list.html',
                        controller: 'CategoryListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
