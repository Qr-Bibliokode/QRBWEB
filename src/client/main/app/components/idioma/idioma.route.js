(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('idioma', {
                url: '/idioma',
                templateUrl: 'app/components/idioma/idioma.tabs.html'
            })
            .state('idiomaCreate', {
                parent: 'idioma',
                views: {
                    "tabIdioma": {
                        templateUrl: 'app/components/idioma/create/idioma.create.html',
                        controller: 'IdiomaCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('idiomaEdit', {
                parent: 'idioma',
                views: {
                    "tabIdioma": {
                        templateUrl: 'app/components/idioma/edit/idioma.edit.html',
                        controller: 'IdiomaEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('idiomaList', {
                parent: 'idioma',
                views: {
                    "tabIdioma": {
                        templateUrl: 'app/components/idioma/list/idioma.list.html',
                        controller: 'IdiomaListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
