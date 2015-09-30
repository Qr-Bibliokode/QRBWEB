(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('autor', {
                url: '/autor',
                templateUrl: 'app/components/autor/autor.tabs.html'
            })
            .state('autorCreate', {
                parent: 'autor',
                views: {
                    "tabAutor": {
                        templateUrl: 'app/components/autor/create/autor.create.html',
                        controller: 'AutorCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('autorEdit', {
                parent: 'autor',
                views: {
                    "tabAutor": {
                        templateUrl: 'app/components/autor/edit/autor.edit.html',
                        controller: 'AutorEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('autorList', {
                parent: 'autor',
                views: {
                    "tabAutor": {
                        templateUrl: 'app/components/autor/list/autor.list.html',
                        controller: 'AutorListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
