(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('livro', {
                url: '/livro',
                templateUrl: 'app/components/livro/livro.tabs.html'
            })
            .state('livroCreate', {
                parent: 'livro',
                views: {
                    "tabLivro": {
                        templateUrl: 'app/components/livro/create/livro.create.html',
                        controller: 'LivroCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('livroEdit', {
                parent: 'livro',
                views: {
                    "tabLivro": {
                        templateUrl: 'app/components/livro/edit/livro.edit.html',
                        controller: 'LivroEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('livroList', {
                parent: 'livro',
                views: {
                    "tabLivro": {
                        templateUrl: 'app/components/livro/list/livro.list.html',
                        controller: 'LivroListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
