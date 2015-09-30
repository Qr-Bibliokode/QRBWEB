(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('empregado', {
                url: '/empregado',
                templateUrl: 'app/components/empregado/empregado.tabs.html'
            })
            .state('empregadoCreate', {
                parent: 'empregado',
                views: {
                    "tabEmpregado": {
                        templateUrl: 'app/components/empregado/create/empregado.create.html',
                        controller: 'EmpregadoCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('empregadoEdit', {
                parent: 'empregado',
                views: {
                    "tabEmpregado": {
                        templateUrl: 'app/components/empregado/edit/empregado.edit.html',
                        controller: 'EmpregadoEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('empregadoList', {
                parent: 'empregado',
                views: {
                    "tabEmpregado": {
                        templateUrl: 'app/components/empregado/list/empregado.list.html',
                        controller: 'EmpregadoListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
