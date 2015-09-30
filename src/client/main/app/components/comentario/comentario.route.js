(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('comentario', {
                url: '/comentario',
                templateUrl: 'app/components/comentario/comentario.tabs.html'
            })
            .state('comentarioCreate', {
                parent: 'comentario',
                views: {
                    "tabComentario": {
                        templateUrl: 'app/components/comentario/create/comentario.create.html',
                        controller: 'ComentarioCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('comentarioEdit', {
                parent: 'comentario',
                views: {
                    "tabComentario": {
                        templateUrl: 'app/components/comentario/edit/comentario.edit.html',
                        controller: 'ComentarioEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('comentarioList', {
                parent: 'comentario',
                views: {
                    "tabComentario": {
                        templateUrl: 'app/components/comentario/list/comentario.list.html',
                        controller: 'ComentarioListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
