(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('holiday', {
                url: '/holiday',
                templateUrl: 'app/components/holiday/holiday.tabs.html'
            })
            .state('holidayCreate', {
                parent: 'holiday',
                views: {
                    "tabHoliday": {
                        templateUrl: 'app/components/holiday/create/holiday.create.html',
                        controller: 'HolidayCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('holidayEdit', {
                parent: 'holiday',
                views: {
                    "tabHoliday": {
                        templateUrl: 'app/components/holiday/edit/holiday.edit.html',
                        controller: 'HolidayEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('holidayList', {
                parent: 'holiday',
                views: {
                    "tabHoliday": {
                        templateUrl: 'app/components/holiday/list/holiday.list.html',
                        controller: 'HolidayListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
