(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('author', {
                url: '/author',
                templateUrl: 'app/components/author/author.tabs.html'
            })
            .state('authorCreate', {
                parent: 'author',
                views: {
                    "tabAuthor": {
                        templateUrl: 'app/components/author/create/author.create.html',
                        controller: 'AuthorCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo/:id?'
            })
            .state('authorList', {
                parent: 'author',
                views: {
                    "tabAuthor": {
                        templateUrl: 'app/components/author/list/author.list.html',
                        controller: 'AuthorListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
