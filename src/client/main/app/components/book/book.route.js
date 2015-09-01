(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('book', {
                url: '/book',
                templateUrl: 'app/components/book/book.tabs.html'
            })
            .state('bookCreate', {
                parent: 'book',
                views: {
                    "tabBook": {
                        templateUrl: 'app/components/book/create/book.create.html',
                        controller: 'BookCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('bookEdit', {
                parent: 'book',
                views: {
                    "tabBook": {
                        templateUrl: 'app/components/book/edit/book.edit.html',
                        controller: 'BookEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('bookList', {
                parent: 'book',
                views: {
                    "tabBook": {
                        templateUrl: 'app/components/book/list/book.list.html',
                        controller: 'BookListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
