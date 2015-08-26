(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('idiom', {
                url: '/idiom',
                templateUrl: 'app/components/idiom/idiom.tabs.html'
            })
            .state('idiomCreate', {
                parent: 'idiom',
                views: {
                    "tabIdiom": {
                        templateUrl: 'app/components/idiom/create/idiom.create.html',
                        controller: 'IdiomCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('idiomEdit', {
                parent: 'idiom',
                views: {
                    "tabIdiom": {
                        templateUrl: 'app/components/idiom/edit/idiom.edit.html',
                        controller: 'IdiomEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('idiomList', {
                parent: 'idiom',
                views: {
                    "tabIdiom": {
                        templateUrl: 'app/components/idiom/list/idiom.list.html',
                        controller: 'IdiomListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
