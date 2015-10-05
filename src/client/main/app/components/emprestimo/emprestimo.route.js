(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('emprestimo', {
                url: '/emprestimo',
                templateUrl: 'app/components/emprestimo/emprestimo.tabs.html'
            })
            .state('emprestimoLend', {
                parent: 'emprestimo',
                views: {
                    "tabEmprestimo": {
                        templateUrl: 'app/components/emprestimo/emprestar/emprestimo.emprestar.html',
                        controller: 'EmprestimoLendController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('emprestimoEdit', {
                parent: 'emprestimo',
                views: {
                    "tabEmprestimo": {
                        templateUrl: 'app/components/emprestimo/edit/emprestimo.edit.html',
                        controller: 'EmprestimoEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('emprestimoList', {
                parent: 'emprestimo',
                views: {
                    "tabEmprestimo": {
                        templateUrl: 'app/components/emprestimo/list/emprestimo.list.html',
                        controller: 'EmprestimoListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
