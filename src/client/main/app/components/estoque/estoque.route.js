(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('estoque', {
                url: '/estoque',
                templateUrl: 'app/components/estoque/estoque.tabs.html'
            })
            .state('estoqueCreate', {
                parent: 'estoque',
                views: {
                    "tabEstoque": {
                        templateUrl: 'app/components/estoque/create/estoque.create.html',
                        controller: 'EstoqueCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('estoqueEdit', {
                parent: 'estoque',
                views: {
                    "tabEstoque": {
                        templateUrl: 'app/components/estoque/edit/estoque.edit.html',
                        controller: 'EstoqueEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('estoqueList', {
                parent: 'estoque',
                views: {
                    "tabEstoque": {
                        templateUrl: 'app/components/estoque/list/estoque.list.html',
                        controller: 'EstoqueListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
