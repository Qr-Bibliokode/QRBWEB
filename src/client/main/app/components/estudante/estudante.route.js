(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('estudante', {
                url: '/estudante',
                templateUrl: 'app/components/estudante/estudante.tabs.html'
            })
            .state('estudanteCreate', {
                parent: 'estudante',
                views: {
                    "tabEstudante": {
                        templateUrl: 'app/components/estudante/create/estudante.create.html',
                        controller: 'EstudanteCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('estudanteEdit', {
                parent: 'estudante',
                views: {
                    "tabEstudante": {
                        templateUrl: 'app/components/estudante/edit/estudante.edit.html',
                        controller: 'EstudanteEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('estudanteList', {
                parent: 'estudante',
                views: {
                    "tabEstudante": {
                        templateUrl: 'app/components/estudante/list/estudante.list.html',
                        controller: 'EstudanteListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
