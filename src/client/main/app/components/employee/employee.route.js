(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('employee', {
                url: '/employee',
                templateUrl: 'app/components/employee/employee.tabs.html'
            })
            .state('employeeCreate', {
                parent: 'employee',
                views: {
                    "tabEmployee": {
                        templateUrl: 'app/components/employee/create/employee.create.html',
                        controller: 'EmployeeCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('employeeEdit', {
                parent: 'employee',
                views: {
                    "tabEmployee": {
                        templateUrl: 'app/components/employee/edit/employee.edit.html',
                        controller: 'EmployeeEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('employeeList', {
                parent: 'employee',
                views: {
                    "tabEmployee": {
                        templateUrl: 'app/components/employee/list/employee.list.html',
                        controller: 'EmployeeListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
