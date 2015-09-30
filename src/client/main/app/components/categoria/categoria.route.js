(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('categoria', {
                url: '/categoria',
                templateUrl: 'app/components/categoria/categoria.tabs.html'
            })
            .state('categoriaCreate', {
                parent: 'categoria',
                views: {
                    "tabCategoria": {
                        templateUrl: 'app/components/categoria/create/categoria.create.html',
                        controller: 'CategoriaCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('categoriaEdit', {
                parent: 'categoria',
                views: {
                    "tabCategoria": {
                        templateUrl: 'app/components/categoria/edit/categoria.edit.html',
                        controller: 'CategoriaEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('categoriaList', {
                parent: 'categoria',
                views: {
                    "tabCategoria": {
                        templateUrl: 'app/components/categoria/list/categoria.list.html',
                        controller: 'CategoriaListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
