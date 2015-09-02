(function () {
    'use strict';

    angular
        .module('qrbweb')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('student', {
                url: '/student',
                templateUrl: 'app/components/student/student.tabs.html'
            })
            .state('studentCreate', {
                parent: 'student',
                views: {
                    "tabStudent": {
                        templateUrl: 'app/components/student/create/student.create.html',
                        controller: 'StudentCreateController',
                        controllerAs: 'vm'
                    }
                },
                url: '/novo'
            })
            .state('studentEdit', {
                parent: 'student',
                views: {
                    "tabStudent": {
                        templateUrl: 'app/components/student/edit/student.edit.html',
                        controller: 'StudentEditController',
                        controllerAs: 'vm'
                    }
                },
                url: '/edit/:id?'
            })
            .state('studentList', {
                parent: 'student',
                views: {
                    "tabStudent": {
                        templateUrl: 'app/components/student/list/student.list.html',
                        controller: 'StudentListController',
                        controllerAs: 'vm'
                    }
                },
                url: '/listagem'
            });
    }
})();
