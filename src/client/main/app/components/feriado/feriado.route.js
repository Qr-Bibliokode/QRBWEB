(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('feriado', {
                url: '/feriado',
                templateUrl: 'app/components/feriado/feriado.tabs.html'
            })
            .state('feriadoCreate', {
                parent: 'feriado',
                views: {
                    "tabFeriado": {
                        templateUrl: 'app/components/feriado/create/feriado.create.html',
                        controller: 'FeriadoCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('feriadoEdit', {
                parent: 'feriado',
                views: {
                    "tabFeriado": {
                        templateUrl: 'app/components/feriado/edit/feriado.edit.html',
                        controller: 'FeriadoEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('feriadoList', {
                parent: 'feriado',
                views: {
                    "tabFeriado": {
                        templateUrl: 'app/components/feriado/list/feriado.list.html',
                        controller: 'FeriadoListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
