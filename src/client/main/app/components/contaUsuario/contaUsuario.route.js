(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('contaUsuario', {
                url: '/contaUsuario',
                templateUrl: 'app/components/contaUsuario/contaUsuario.tabs.html'
            })
            .state('contaUsuarioCreate', {
                parent: 'contaUsuario',
                views: {
                    "tabContaUsuario": {
                        templateUrl: 'app/components/contaUsuario/create/contaUsuario.create.html',
                        controller: 'ContaUsuarioCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('contaUsuarioEdit', {
                parent: 'contaUsuario',
                views: {
                    "tabContaUsuario": {
                        templateUrl: 'app/components/contaUsuario/edit/contaUsuario.edit.html',
                        controller: 'ContaUsuarioEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('contaUsuarioList', {
                parent: 'contaUsuario',
                views: {
                    "tabContaUsuario": {
                        templateUrl: 'app/components/contaUsuario/list/contaUsuario.list.html',
                        controller: 'ContaUsuarioListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            })
    }
})();
