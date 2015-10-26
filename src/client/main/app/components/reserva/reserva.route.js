(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('reserva', {
                url: '/reserva',
                templateUrl: 'app/components/reserva/reserva.tabs.html'
            })
            .state('reservaCreate', {
                parent: 'reserva',
                views: {
                    "tabReserva": {
                        templateUrl: 'app/components/reserva/create/reserva.create.html',
                        controller: 'ReservaCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('reservaEdit', {
                parent: 'reserva',
                views: {
                    "tabReserva": {
                        templateUrl: 'app/components/reserva/edit/reserva.edit.html',
                        controller: 'ReservaEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('reservaList', {
                parent: 'reserva',
                views: {
                    "tabReserva": {
                        templateUrl: 'app/components/reserva/list/reserva.list.html',
                        controller: 'ReservaListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
