(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('funcionario', {
                url: '/funcionario',
                templateUrl: 'app/components/funcionario/funcionario.tabs.html'
            })
            .state('funcionarioCreate', {
                parent: 'funcionario',
                views: {
                    "tabFuncionario": {
                        templateUrl: 'app/components/funcionario/create/funcionario.create.html',
                        controller: 'FuncionarioCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('funcionarioEdit', {
                parent: 'funcionario',
                views: {
                    "tabFuncionario": {
                        templateUrl: 'app/components/funcionario/edit/funcionario.edit.html',
                        controller: 'FuncionarioEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('funcionarioList', {
                parent: 'funcionario',
                views: {
                    "tabFuncionario": {
                        templateUrl: 'app/components/funcionario/list/funcionario.list.html',
                        controller: 'FuncionarioListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
