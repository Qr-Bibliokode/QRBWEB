(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('stock', {
                url: '/stock',
                templateUrl: 'app/components/stock/stock.tabs.html'
            })
            .state('stockCreate', {
                parent: 'stock',
                views: {
                    "tabStock": {
                        templateUrl: 'app/components/stock/create/stock.create.html',
                        controller: 'StockCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('stockEdit', {
                parent: 'stock',
                views: {
                    "tabStock": {
                        templateUrl: 'app/components/stock/edit/stock.edit.html',
                        controller: 'StockEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('stockList', {
                parent: 'stock',
                views: {
                    "tabStock": {
                        templateUrl: 'app/components/stock/list/stock.list.html',
                        controller: 'StockListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
